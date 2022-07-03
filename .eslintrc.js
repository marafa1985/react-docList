module.exports = {
  env: {
    browser: true,
    es6: true,
    jest:true,
    node:true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parser: "@babel/eslint-parser"
  ,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-console": "off",
  }
}
