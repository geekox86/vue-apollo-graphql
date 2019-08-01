module.exports = (entry) => {
  return {
    loader: 'ts-loader',
    options: {
      onlyCompileBundledFiles: true,
      ...(entry.mode == 'production' && entry.modules && {
        compilerOptions: {
          declaration: true,
          declarationDir: entry.output
        }
      })
    }
  }
}
