module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'ShallowCompareWithoutFunctions',
    jsNext: false,
    umd: true
  }
}
