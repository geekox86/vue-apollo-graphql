const config = {
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath + snapshotExtension,
  resolveTestPath: (snapshotPath, snapshotExtension) => snapshotPath.slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: '<rootDir>/tests/index.ts'
}

module.exports = config
