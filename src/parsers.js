import yaml from 'js-yaml';

const formats = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parseFile = (file, extension) => formats[extension](file);

export default parseFile;
