import stylish from './stylish.js';
import plain from './plain.js';


const formatter = { stylish, plain };

const format = (file, formatName = 'stylish') => {

    return formatter[formatName](file);

};
  
export default format;