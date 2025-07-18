import { Pinecone } from '@pinecone-database/pinecone';
import { pipeline } from '@xenova/transformers';
import 'dotenv/config';


function chunkText(text: string, maxChunkSize = 500): string[] {
  const sentences = text.split(/(?<=[.!?\n])\s+/);
  const chunks: string[] = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > maxChunkSize) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += ' ' + sentence;
    }
  }

  if (currentChunk) chunks.push(currentChunk.trim());
  return chunks;
}


async function run() {
  const resumeText = `add your resume in text here`;

  const chunks = chunkText(resumeText);
  console.log(`Split into ${chunks.length} chunks`);

  console.log('Loading local embedding model...');
  const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

  const embeddedChunks = await Promise.all(
    chunks.map(async (chunk, i) => {
      const output = await embedder(chunk, { pooling: 'mean', normalize: true });
      const values = Array.from(output.data);

      return {
        id: `chunk-${i}`,
        values,
        metadata: { text: chunk },
      };
    })
  );

  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
  const index = pinecone.Index(process.env.PINECONE_INDEX!);

  console.log('Uploading to Pinecone...');
  await index.upsert(embeddedChunks);

  console.log('Resume embedded locally & pushed to Pinecone');
}

run().catch((err) => {
  console.error('Error:', err);
});
