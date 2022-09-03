import yaml from 'js-yaml';

const formats = {
    json: JSON.parse,
    yaml: yaml.load,
};

const parseFile = (file, extension) => {
    return formats[extension](file);
};

export default parseFile;