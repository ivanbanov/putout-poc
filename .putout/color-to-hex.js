const putout = require('putout')
const { types, generate, operator } = putout;
const { StringLiteral } = types
// const { replaceWith, setLiteralValue } = operator

const getColorHexFromPath = (node) => {
  const color = node.declarations[0].init.value
  const hex = {
    red: '#f00',
    green: '#0f0',
    blue: '#00f',
  }

  return hex[color]
}

module.exports.report = (path) => {
  return `Replace color ${path.declarations[0].init.value} with ${getColorHexFromPath(path)}.`
}

module.exports.include = () => [
  'VariableDeclaration',
]

module.exports.filter = (path) => {
  return !!getColorHexFromPath(path.node)
}

module.exports.fix = (path) => {
  path.node.declarations[0].init = StringLiteral(getColorHexFromPath(path.node))
  return generate(path.node).code
}

