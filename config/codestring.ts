// pages/index.tsx
import fs from 'fs';
import path from 'path';

export const CodeStringConvertor = (filepath: string) => {
  // Define the path to your TSX file
  const filePath = path.join(process.cwd(), filepath);
  // Read the TSX file contents
  const tsxContent = fs.readFileSync(filePath, 'utf8');

  return tsxContent;
};
