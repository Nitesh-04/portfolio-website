import { NextResponse } from 'next/server';
import { pipeline } from '@xenova/transformers';
import { Pinecone } from '@pinecone-database/pinecone';
import 'dotenv/config';

export async function POST(req: Request) {
    const { message } = await req.json();

    if (!message) {
        return NextResponse.json({ error: 'Missing user message' }, { status: 400 });
    }

    try {
        const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        const output = await embedder(message, { pooling: 'mean', normalize: true });
        const queryEmbedding = Array.from(output.data);

        const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
        const index = pinecone.Index(process.env.PINECONE_INDEX!);
        const results = await index.query({
            vector: queryEmbedding,
            topK: 5,
            includeMetadata: true,
        });

        const contextChunks = results.matches?.map((m) => m.metadata?.text).filter(Boolean) ?? [];

        console.log('Context chunks:', contextChunks);

        const prompt = `
                Answer the user's question using only the context below:

                Context:
                ${contextChunks.map((c, i) => `${i + 1}. ${c}`).join('\n\n')}

                Question: ${message}

                Format your answer in a concise and informative manner, using the context provided.

                Dont pick and print data directly, format it and see special chars or bad data.

                Also when answering as a chatbot, so if user asks you a question, respond by formatting answer the way chatbots do. Like, imagine answering on behalf of me, but do not info that I am gemini and do not include any greetings or additional terms in your response. Just answer the question directly.
                `;

        const API_KEY = process.env.GEMINI_API_KEY;

        const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            contents: [
                {
                    role: "user",
                    parts: [{ text: `${prompt}`}],
                },
            ],
            systemInstruction: {
                role: "system",
                parts: [
                {
                    text: "You are a helpful assistant that provides concise and accurate answers based on the provided context. Do not include any greetings or additional terms in your response.",
                },
                ],
            },
            safetySettings: [],
            generationConfig: {
                stopSequences: [],
                temperature: 0.7,
                maxOutputTokens: 1024,
            },
            }),
        }
        );

        const data = await response.json();

        const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        return NextResponse.json({ answer });
    } catch (err) {
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
