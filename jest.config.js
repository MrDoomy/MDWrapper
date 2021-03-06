module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).{js,jsx}'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(css|scss)$': 'jest-css-modules'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@material)'
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js'
  ]
};
