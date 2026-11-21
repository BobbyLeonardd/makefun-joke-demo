// Writes the entry text where the program/v1 harness reads it.
import { mkdirSync, writeFileSync } from 'node:fs';

const JOKE = 'I told my agent it was wrong. It thanked me, said I was absolutely right, agreed with every word, and fixed a different bug. Now I have two.';

const out = process.env.OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${JOKE.trim()}\n`);