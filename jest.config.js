module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.test.tsx'],
  coverageReporters: ['lcov', 'json']
}
