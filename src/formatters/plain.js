import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (node, path = []) => {
  const currentPath = ([...path, node.key]);
  const fullPath = currentPath.join('.');
  switch (node.type) {
    case 'nested':
      return node.children.flatMap((child) => plain(child, currentPath));
    case 'added':
      return `Property '${fullPath}' was added with value: ${getValue(node.value)}\n`;
    case 'removed':
      return `Property '${fullPath}' was removed\n`;
    case 'updated':
      return `Property '${fullPath}' was updated. From ${getValue(node.value.value1)} to ${getValue(node.value.value2)}\n`;
    case 'root':
      return String((node.children.flatMap((child) => plain(child, []))).join('').trim());
    case 'equal':
      return [];
    default:
      throw new Error(`Unknown type of node ${node.type}`);
  }
};

export default plain;
