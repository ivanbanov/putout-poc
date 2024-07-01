const { parser, plugin: tseslintPlugin } = require('typescript-eslint');

const { createPlugin } = require('@putout/eslint/create-plugin');

module.exports = [
  {
    files: ['*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
    },
    rules: {
      'no-debugger': ['error', createPlugin(require('./.putout/no-debugger.js'))]
    }
  }
]
