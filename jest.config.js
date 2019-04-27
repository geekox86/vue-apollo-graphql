const config = {
  testURL: 'http://localhost:8080/',
  testMatch: ['<rootDir>/tests/**/*.(js|jsx|ts|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(css|less|sass|scss|styl|aac|m4a|mp3|mp4|oga|wav|webm|gif|jpg|jpeg|png|svg|eot|otf|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(vuetify)/)'],
  snapshotResolver: '<rootDir>/snapshot.config.js',
  snapshotSerializers: ['jest-serializer-vue'],
  setupFilesAfterEnv: ['jest-chain', 'jest-extended'],
  collectCoverage: true,
  coverageReporters: ['text'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}

module.exports = config
