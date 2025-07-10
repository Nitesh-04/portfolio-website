import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { pipeline } from '@xenova/transformers';
import { Pinecone } from '@pinecone-database/pinecone';
import { GoogleGenAI } from '@google/genai';
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

        const prompt = `
                Answer the user's question using only the context below:

                Context:
                ${contextChunks.map((c, i) => `${i + 1}. ${c}`).join('\n\n')}

                Question: ${message}
                Answer:

                Just provide the answer straight to the point without any additional terms or greetings.
                `;

        process.env.GOOGLE_APPLICATION_CREDENTIALS = path.join(process.cwd(), 'gcp-key.json');

        const genAI = new GoogleGenAI({
            project: process.env.GCP_PROJECT_ID!,
            location: process.env.GCP_LOCATION!,
            apiVersion: 'v1',
            vertexai: true,
        });

        const model = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: {
                    thinkingBudget: 0,
                },
                systemInstruction: "You are a helpful assistant that provides concise and accurate answers based on the provided context. Do not include any greetings or additional terms in your response.",
            }
        });

        const answer = model.text ?? 'Please try again later.';

        return NextResponse.json({ answer });
    } catch (err) {
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
