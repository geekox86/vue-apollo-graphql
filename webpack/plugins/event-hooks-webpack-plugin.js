module.exports = (entry) => {
  const EventHooksWebpackPlugin = require('event-hooks-webpack-plugin')

  const cleanOutputHook = require('../hooks/clean-output-hook')
  const moveModulesHook = require('../hooks/move-modules-hook')

  return new EventHooksWebpackPlugin({
    beforeCompile: {
      tap: 'tapPromise',
      task: async () => {
        await cleanOutputHook(entry)
      }
    },
    afterEmit: {
      tap: 'tapPromise',
      task: async () => {
        await moveModulesHook(entry)
      }
    }
  })
}
