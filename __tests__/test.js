import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';
import path from 'path';

const getFixturePath = (filename) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, '..', '__fixtures__', filename);
};  

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file1.yaml');
const filepath4 = getFixturePath('file2.yaml');

const expectedResult = readFile('expectedStylish.txt');

test('compare JSON', () => {
    expect(genDiff(filepath1, filepath2)).toBe(expectedResult);
});

test('compare YAML', () => {
    expect(genDiff(filepath3, filepath4)).toBe(expectedResult);
});