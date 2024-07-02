
const stringToHex = (value) => {
  const hex = {
    red: '#f00',
    green: '#0f0',
    blue: '#00f',
  }

  return hex[value]
}

const getLiteralValue = (path) => {
  return path.type === 'TemplateLiteral'
    ? path.quasis[0].value.raw
    : path.value
}

module.exports.report = (path) => {
  const value = getLiteralValue(path.init)
  return `Replace color ${value} with ${stringToHex(value)}.`
}

module.exports.include = () => [
  'VariableDeclarator',
]

module.exports.filter = (path) => {
  const variable = path.node.init
  const isTemplateLiteral = variable.type === 'TemplateLiteral'
  const isStringLiteral =
    variable.type === 'Literal' &&
    typeof variable.value === 'string'

  const hex =
    isTemplateLiteral
    ?  stringToHex(variable.quasis[0].value.raw)
    : isStringLiteral
    ? stringToHex(variable.value)
    : null

  return !!hex
}

module.exports.fix = (path) => {
  const value = getLiteralValue(path.node.init)

  return path.text.replace(
    /([^*]*=\s+)("|'|`)[^*]*/,
    `$1$2${stringToHex(value)}$2`)
}
