module.exports = (entry) => {
  if (entry.babel) {
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

    const babelSyntaxDynamicImportPlugin = () => {
      return '@babel/plugin-syntax-dynamic-import'
    }

    const presets = [
      babelEnvPreset(entry),
      babelProposalsPreset(entry)
    ].filter((preset) => preset)

    const plugins = [
      babelRootImportPlugin(entry),
      babelSyntaxDynamicImportPlugin(entry)
    ].filter((plugin) => plugin)

    return {
      loader: 'babel-loader',
      options: {
        ...(presets.length && { presets: presets }),
        ...(plugins.length && { plugins: plugins })
      }
    }
  }
}
