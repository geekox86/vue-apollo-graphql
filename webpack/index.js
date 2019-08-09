module.exports = (entry) => {
  const contextConfig = require('./configs/context-config')
  const devServerConfig = require('./configs/dev-server-config')
  const devtoolConfig = require('./configs/devtool-config')
  const entryConfig = require('./configs/entry-config')
  const externalsConfig = require('./configs/externals-config')
  const miscOptionsConfig = require('./configs/misc-options-config')
  const moduleConfig = require('./configs/module-config')
  const nodeConfig = require('./configs/node-config')
  const outputConfig = require('./configs/output-config')
  const optimizationConfig = require('./configs/optimization-config')
  const performanceConfig = require('./configs/performance-config')
  const pluginsConfig = require('./configs/plugins-config')
  const resolveConfig = require('./configs/resolve-config')
  const statsConfig = require('./configs/stats-config')
  const targetConfig = require('./configs/target-config')
  const watchConfig = require('./configs/watch-config')
  const watchOptionsConfig = require('./configs/watch-options-config')

  return {
    ...{ context: contextConfig(entry) },
    entry: entryConfig(entry),
    ...{ target: targetConfig(entry) },
    output: outputConfig(entry),
    ...{ externals: externalsConfig(entry) },
    ...{ node: nodeConfig(entry) },
    resolve: resolveConfig(entry),
    module: moduleConfig(entry),
    plugins: pluginsConfig(entry),
    ...{ optimization: optimizationConfig(entry) },
    ...{ performance: performanceConfig(entry) },
    ...{ devtool: devtoolConfig(entry) },
    ...{ devServer: devServerConfig(entry) },
    ...{ watch: watchConfig(entry) },
    ...{ watchOptions: watchOptionsConfig(entry) },
    stats: statsConfig(entry),
    ...{ miscOptions: miscOptionsConfig(entry) }
  }
}
