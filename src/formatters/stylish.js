import _ from 'lodash';

const makeIndent = (depth, indentSize = 4) => ' '.repeat(depth * indentSize - 2);

const stringify = (data, func, depth) => {
  if (!_.isPlainObject(data)) {
    return `${data}`;
  }

  const lines = Object
    .entries(data)
    .map(([key, value]) => func({ type: 'equal', value, key }, depth)).join('\n');
  return `{\n${lines}\n${makeIndent(depth - 1)}  }`;
};

const stylish = (node, depth = 1) => {
  switch (node.type) {
    case 'added':
      return `${makeIndent(depth)}+ ${node.key}: ${stringify(node.value, stylish, depth + 1)}`;
    case 'removed':
      return `${makeIndent(depth)}- ${node.key}: ${stringify(node.value, stylish, depth + 1)}`;
    case 'updated':
      return `${makeIndent(depth)}- ${node.key}: ${stringify(node.value.value1, stylish, depth + 1)}\n${makeIndent(depth)}+ ${node.key}: ${stringify(node.value.value2, stylish, depth + 1)}`;
    case 'equal':
      return `${makeIndent(depth)}  ${node.key}: ${stringify(node.value, stylish, depth + 1)}`;
    case 'nested':
    {
      const string = node.children.map((child) => stylish(child, depth + 1)).join('\n');
      return `${makeIndent(depth)}  ${node.key}: {\n${string}\n${makeIndent(depth)}  }`;
    }
    case 'root':
      return `{\n${node.children.map((child) => stylish(child, depth)).join('\n')}\n}`;
    default:
      throw new Error(`Wrong type: '${node.type}'!`);
  }
};

export default stylish;
