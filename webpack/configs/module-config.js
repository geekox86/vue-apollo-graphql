module.exports = (entry) => {
  const assetsRule = require('../rules/assets-rule')
  const cssRule = require('../rules/css-rule')
  const jsRule = require('../rules/js-rule')
  const sassRule = require('../rules/sass-rule')
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
      stylusRule(entry),
      assetsRule(entry)
    ].filter((rule) => rule)
  }
}
