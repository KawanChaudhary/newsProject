module.exports = {
  preset: 'react-native',
  "setupFilesAfterEnv": [
    "./jest.setup.ts"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|react-redux)"
  ]
};