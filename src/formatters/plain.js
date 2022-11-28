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
      return node.children
        .filter((child) => child.type !== 'equal')
        .map((child) => plain(child, currentPath))
        .join('\n');
    case 'added':
      return `Property '${fullPath}' was added with value: ${getValue(node.value)}`;
    case 'removed':
      return `Property '${fullPath}' was removed`;
    case 'updated':
      return `Property '${fullPath}' was updated. From ${getValue(node.value.value1)} to ${getValue(node.value.value2)}`;
    case 'root':
      return (node.children
        .filter((child) => child.type !== 'equal')
        .map((child) => plain(child, [])))
        .join('\n');
    case 'equal':
      return null;
    default:
      throw new Error(`Unknown type of node ${node.type}`);
  }
};

export default plain;
