module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  modulePaths: ["./src"],
  testMatch: ["<rootDir>/src/**/*.(test|spec).+(ts|tsx)"],
  collectCoverage: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
