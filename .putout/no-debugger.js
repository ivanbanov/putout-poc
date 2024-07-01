module.exports.report = () => `Unexpected 'debugger' statement.`

module.exports.fix = () => {
  return ''
}

module.exports.include = () => [
  'DebuggerStatement',
]

module.exports.filter = (path) => {
  return true
}

