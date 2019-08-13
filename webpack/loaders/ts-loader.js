module.exports = (entry) => {
  return {
    loader: 'ts-loader',
    options: {
      ...(entry.vue && { appendTsSuffixTo: [/\.vue$/] }),
      onlyCompileBundledFiles: true,
      transpileOnly: true,
      ...(entry.mode == 'production' && entry.modules && {
        compilerOptions: {
          declaration: true,
          declarationDir: entry.output
        }
      })
    }
  }
}
