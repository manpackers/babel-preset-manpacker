const deepmerge = require('deepmerge')

module.exports = (context, options = {}) => {
  let presets = []
  let plugins = []
  let {
    loose = false,
    debug = false,
    useBuiltIns = 'usage',
    corejs = 3,
    modules = false,
    targets = {
      'browsers': [
        'last 5 versions',
        'Android >= 5.0',
        'iOS >= 8',
        'safari >= 8',
        'ie >= 9'
      ]
    },
    decoratorsLegacy = true,
    propertiesLoose = true
  } = options
  let envOptions = deepmerge({
    loose, debug, modules, useBuiltIns, corejs, targets
  }, options)

  if (envOptions.modules === 'commonjs') {
    plugins.push(require('babel-plugin-dynamic-import-node'))
  }

  presets.unshift(['@babel/env', envOptions])
  plugins.push(
    require('@babel/plugin-syntax-dynamic-import'),
    [require('@babel/plugin-proposal-decorators'), { 'legacy': decoratorsLegacy }],
    [require('@babel/plugin-proposal-class-properties'), { 'loose': propertiesLoose }]
  )
  return { presets, plugins }
}
