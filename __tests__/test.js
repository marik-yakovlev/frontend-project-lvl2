import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/index.js';
import path from 'path';
import expectedJson from '../__fixtures__/expected_file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('compare two JSONs', () => {
  const filepath1 = getFixturePath('../__fixtures__/file1.json');
  const filepath2 = getFixturePath('../__fixtures__/file2.json');

  expect(genDiff(filepath1, filepath2)).toBe(expectedJson);
});