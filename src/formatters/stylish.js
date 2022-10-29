import _ from 'lodash';

const makeIndent = (n) => '  '.repeat(n);

const indentSize = 2;

const stringify = (data, depth = 1) => {
  const closingBracketsIndent = (depth - 1) * indentSize;
  if (!_.isPlainObject(data)) {
    return data;
  }

  const lines = Object
    .entries(data)
    .map(([key, value]) => {
      if (_.isPlainObject(value)) {
        return `${makeIndent(depth * indentSize)}${key}: ${stringify(value, depth + 1)}`;
      }
      return `${makeIndent(depth * indentSize)}${key}: ${value}`;
    });

  return [
    '{',
    ...lines,
    `${makeIndent(closingBracketsIndent)}}`,
  ].join('\n');
};

const stylish = (node, depth = 1) => {
  const modifiedLineIndent = depth * indentSize - 1;
  const closingBracketsIndent = depth * indentSize;
  switch (node.type) {
    case 'added':
      return `${makeIndent(modifiedLineIndent)}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
    case 'removed':
      return `${makeIndent(modifiedLineIndent)}- ${node.key}: ${stringify(node.value, depth + 1)}`;
    case 'updated':
      return `${makeIndent(modifiedLineIndent)}- ${node.key}: ${stringify(node.value.value1, depth + 1)}\n${makeIndent(modifiedLineIndent)}+ ${node.key}: ${stringify(node.value.value2, depth + 1)}`;
    case 'equal':
      return `${makeIndent(depth * indentSize)}${node.key}: ${stringify(node.value, depth)}`;
    case 'nested':
      return [`${makeIndent(depth * indentSize)}${node.key}: {`, ...node.children.map((child) => stylish(child, depth + 1)), `${makeIndent(closingBracketsIndent)}}`].join('\n');
    case 'root':
      return ['{', ...node.children.map((child) => stylish(child, depth)), '}'].join('\n');
    default:
      throw new Error(`Wrong type: '${node.type}'!`);
  }
};

export default stylish;
