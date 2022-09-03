import stylish from './stylish.js';

const formatter = { stylish };

const format = (file, formatName = 'stylish') => {

    return formatter[formatName](file);

};
  
export default format;