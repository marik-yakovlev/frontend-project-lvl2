import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildFullPath = (filepath) => (path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath));

const readFile = (filename) => readFileSync(buildFullPath(filename), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJSON = readFile('expectedJSON.txt');

const extensions = ['json', 'yml', 'yaml'];

test.each([extensions])('Compare two files', (formatName) => {
  const firstFile = buildFullPath(`file1.${formatName}`);
  const secondFile = buildFullPath(`file2.${formatName}`);
  expect(genDiff(firstFile, secondFile)).toEqual(expectedStylish);
  expect(genDiff(firstFile, secondFile, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(firstFile, secondFile, 'plain')).toEqual(expectedPlain);
  expect(genDiff(firstFile, secondFile, 'json')).toEqual(expectedJSON);
});

test.each([extensions])('Wrong file extension or format name', (formatName) => {
  const wrongExtension = buildFullPath('file.txt');
  const firstFile = buildFullPath(`file1.${formatName}`);
  const secondFile = buildFullPath(`file2.${formatName}`);

  expect(() => genDiff(wrongExtension, secondFile, 'json'))
    .toThrow('Unknown extension!');
  expect(() => genDiff(firstFile, secondFile, 'smlish'))
    .toThrow('Unknown format!');
});
