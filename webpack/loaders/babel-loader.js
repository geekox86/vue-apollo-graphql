const babelEnvPreset = (entry) => {
  if (entry.mode == 'production') {
    return [
      '@babel/env',
      {
        targets: entry.engines,
        modules: false,
        corejs: '3',
        useBuiltIns: 'usage'
      }
    ]
  }
}

const babelProposalsPreset = (entry) => {
  if (entry.mode == 'production') {
    return [
      'babel-preset-proposals',
      { all: true }
    ]
  }
}

const babelRootImportPlugin = (entry) => {
  if (entry.mode == 'production' && entry.modules) {
    return [
      'babel-plugin-root-import',
      { rootPathPrefix: '@' }
    ]
  }
}

module.exports = (entry) => {
  if (entry.babel) {
    const presets = [
      babelEnvPreset(entry),
      babelProposalsPreset(entry)
    ].filter((preset) => preset)
    const plugins = [babelRootImportPlugin(entry)].filter((plugin) => plugin)

    return {
      loader: 'babel-loader',
      options: {
        ...(presets.length && { presets: presets }),
        ...(plugins.length && { plugins: plugins })
      }
    }
  }
}
