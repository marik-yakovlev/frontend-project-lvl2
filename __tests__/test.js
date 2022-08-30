import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import path from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildFullPath = (filepath) => (path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath));

const readFile = (filename) => readFileSync(buildFullPath(filename), 'utf-8');

const files = ['file1.json', 'file2.json', 'expected_file.txt'];

test.each(files)('Compare file1.json and file2.json', (file1, file2, formatFile) => {
    const filepath1 = buildFullPath(file1);
    const filepath2 = buildFullPath(file2);
    const result = genDiff(filepath1, filepath2);
    expect(result).toEqual(readFile(formatFile));
  });