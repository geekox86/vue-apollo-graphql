const snapshotResolver = {
  resolveSnapshotPath: (testPath, snapshotExtension) => testPath.replace('tests', 'tests/snapshots') + snapshotExtension,
  resolveTestPath: (snapshotPath, snapshotExtension) => snapshotPath.replace('tests/snapshots', 'tests').slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: '<rootDir>/tests/index.ts'
}

module.exports = snapshotResolver
