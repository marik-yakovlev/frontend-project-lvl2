import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

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
const filepath5 = getFixturePath('flatFile1.json');
const filepath6 = getFixturePath('flatFile2.json');

const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJSON = readFile('expectedJSON.txt');
const expectedFlatFile = readFile('expectedFlatFile.txt');

test('compare JSON (stylish)', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
});

test('compare YAML (stylish)', () => {
  expect(genDiff(filepath3, filepath4)).toEqual(expectedStylish);
});

test('compare JSON (plain)', () => {
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
});

test('compare YAML(plain)', () => {
  expect(genDiff(filepath3, filepath4, 'plain')).toEqual(expectedPlain);
});

test('compare JSON (json)', () => {
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJSON);
});

test('compare YAML(json)', () => {
  expect(genDiff(filepath3, filepath4, 'json')).toEqual(expectedJSON);
});

test('compare flat files(json)', () => {
  expect(genDiff(filepath5, filepath6)).toEqual(expectedFlatFile);
});
