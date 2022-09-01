import _ from 'lodash';
import parseFile from './parsers.js';

const diffData = (file1, file2) => {
    const keys1 = _.keys(file1);
    const keys2 = _.keys(file2);
    const keys = _.sortBy(_.union(keys1, keys2));

    const result = keys.map((key) => {
        const value1 = file1[key];
        const value2 = file2[key];
        if (!_.has(file1, key)) {
            return `+ ${key}: ${value2}`;
        } if (!_.has(file2, key)) {
            return `- ${key}: ${value1}`;
        } if (!_.isEqual(value1, value2)) {
            return `- ${key}: ${value1}\n+ ${key}: ${value2}`;
        }
        return `  ${key}: ${value1}`;
    
    });
    const newResult = `{\n${result.join('\n').trim()}\n}`;
    return newResult;
};


export default (filepath1, filepath2) => {
    const parsedData1 = parseFile(filepath1);
    const parsedData2 = parseFile(filepath2);
    return diffData(parsedData1, parsedData2);
};

