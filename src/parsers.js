import _ from 'lodash';
import yaml from 'js-yaml';

const formats = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parseFile = (file, extension) => {
  if (!_.has(formats, extension)) {
    throw new Error('Unknown extension!');
  }
  return formats[extension](file);
};

export default parseFile;
