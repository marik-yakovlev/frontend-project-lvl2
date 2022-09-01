import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import path from 'path';
import expectedResult from '../__fixtures__/expected_file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare two JSON files', () => {
    const filepath1 = getFixturePath('../__fixtures__/file1.json');
    const filepath2 = getFixturePath('../__fixtures__/file2.json');

    expect(genDiff(filepath1, filepath2)).toBe(expectedResult);
});

test('compare two YAML files', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
  
    expect(genDiff(filepath1, filepath2)).toBe(expectedResult);
});
  