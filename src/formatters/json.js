const json = (node) => JSON.stringify(node.children, 1, ' '.repeat(4));

export default json;
