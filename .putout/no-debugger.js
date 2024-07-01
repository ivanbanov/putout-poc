module.exports.report = () => `Unexpected 'debugger' statement.`

module.exports.fix = (path) => {
  return ''
}

module.exports.include = () => [
  'DebuggerStatement',
]

module.exports.filter = (path) => {
  console.log(path)
  return true
}

