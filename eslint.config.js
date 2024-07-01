const { parser, plugin: tseslintPlugin } = require('typescript-eslint')

const { createPlugin } = require('@putout/eslint/create-plugin')

module.exports = [
  {
    files: ['*.ts'],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
      '@mds': {
        rules: {
          'no-debugger': createPlugin(require('./.putout/no-debugger.js')),
          'color-to-hex': createPlugin(require('./.putout/color-to-hex.js')),
        },
      },
    },
    rules: {
      '@mds/no-debugger': 'error',
      '@mds/color-to-hex': 'error',
    }
  }
]