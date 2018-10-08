module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard'
  ],
  plugins: [
    'html'
  ],
  rules: {
    'comma-dangle': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': 0,
    'no-mixed-operators': 0,
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}