import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import parseFile from './parsers.js';
import objectDiff from './objectDiff.js';
import format from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildFullPath = (filepath) => (path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath));

const readFileData = (filename) => readFileSync(buildFullPath(filename), 'utf-8');

const getExtension = (filepath) => path.extname(filepath).slice(1).toLowerCase();

const data = (file) => {
  const fullPath = buildFullPath(file);
  const extension = getExtension(file);
  const readFile = readFileData(fullPath);
  return parseFile(readFile, extension);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parsedFile1 = data(filepath1);
  const parsedFile2 = data(filepath2);

  const getDiff = objectDiff(parsedFile1, parsedFile2);
  const formattedFile = format(getDiff, formatName);

  return formattedFile;
};

export default genDiff;
