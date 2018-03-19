module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  plugins: [
    "html"
  ],
  extends: 'standard',
  rules: {
    "indent": [1, 4, { "SwitchCase": 1 }],
    "semi": [1, "always"],
    "no-undef": 1,
    "no-tabs": 0,
    "quotes": 0,    
    "spaced-comment": 0,    
    "yoda": 0,
    "eqeqeq": 0,
    "no-redeclare": 0,
    "no-labels": 0,
    "space-before-function-paren": 0,
    "padded-blocks": 0,
    "no-multiple-empty-lines": 0
  }
}
