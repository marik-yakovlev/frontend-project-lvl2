import _ from 'lodash';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = { stylish, plain, json };

const format = (file, formatName = 'stylish') => {
  if (!_.has(formatter, formatName)) {
    throw new Error('Unknown format!');
  }
  return formatter[formatName](file);
};
export default format;
