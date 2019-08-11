module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/src/**/*.test.+(ts|js)'],
  testPathIgnorePatterns: ['src/test/index.ts']
}
