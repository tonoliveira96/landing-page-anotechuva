import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const readMarkdownContent = (slug: string) => {
  const file = readFileSync(join(process.cwd(), 'src/content', `${slug}.md`), 'utf8');
  return matter(file);
};
