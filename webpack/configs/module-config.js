module.exports = (entry) => {
  const jsRule = require('../rules/js-rule')
  const tsRule = require('../rules/ts-rule')
  const vueRule = require('../rules/vue-rule')
  const cssRule = require('../rules/css-rule')
  const stylusRule = require('../rules/stylus-rule')
  const assetsRule = require('../rules/assets-rule')

  return {
    rules: [
      jsRule(entry),
      tsRule(entry),
      vueRule(entry),
      cssRule(entry),
      stylusRule(entry),
      assetsRule(entry)
    ].filter((rule) => rule)
  }
}
