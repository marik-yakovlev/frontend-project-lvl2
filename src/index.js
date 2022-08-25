import { readFileSync } from 'fs';
import _ from 'lodash';


const diffData = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!_.has(file1, key)) {
      return `  + ${key}: ${value2}`;
    } if (!_.has(file2, key)) {
      return `  - ${key}: ${value1}`;
    } if (!_.isEqual(value1, value2)) {
      return `  - ${key}: ${value1} \n  + ${key}: ${value2}`;
    }
    return `    ${key}: ${value1}`;
    
  });
  const newResult = `{\n  ${result.join('\n').trim()}\n}`;
      console.log(newResult);
      return newResult;
};

// const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export default (filepath1, filepath2) => {
const readFileData = (filepath) => readFileSync(filepath,'utf8');
const data1 = readFileData(filepath1);
const data2 = readFileData(filepath2);
const parsedData1 = JSON.parse(data1);
const parsedData2 = JSON.parse(data2);
diffData(parsedData1, parsedData2);
};

