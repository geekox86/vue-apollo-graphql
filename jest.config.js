const config = {
  testURL: 'http://localhost:8080/',
  testMatch: ['<rootDir>/tests/**/*.(js|jsx|ts|tsx|vue)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2|css|sass|scss)$':
      'jest-transform-stub'
  },
  transformIgnorePatterns: ['/node_modules/'],
  snapshotResolver: '<rootDir>/snapshot.config.js',
  snapshotSerializers: ['jest-serializer-vue'],
  setupFilesAfterEnv: ['jest-chain', 'jest-extended'],
  collectCoverage: true,
  coverageReporters: ['text'],
  globals: {
    'ts-jest': {
      tsConfig: {
        module: 'commonjs',
        target: 'es5'
      },
      babelConfig: true
    }
  }
}

module.exports = config
