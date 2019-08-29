module.exports = (entry) => {
  const assetRule = require('../rules/asset-rule')
  const cssRule = require('../rules/css-rule')
  const jsRule = require('../rules/js-rule')
  const sassRule = require('../rules/sass-rule')
  const lessRule = require('../rules/less-rule')
  const stylusRule = require('../rules/stylus-rule')
  const tsRule = require('../rules/ts-rule')
  const vueRule = require('../rules/vue-rule')

  return {
    rules: [
      jsRule(entry),
      tsRule(entry),
      vueRule(entry),
      cssRule(entry),
      sassRule(entry),
      lessRule(entry),
      stylusRule(entry),
      assetRule(entry)
    ].filter((rule) => rule)
  }
}
