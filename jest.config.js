module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "\\.ts$": ['ts-jest']
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)'
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverage: true,
  coverageDirectory: "coverage"
}