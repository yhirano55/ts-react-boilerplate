module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
    "\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  modulePaths: ["./src"],
  testMatch: ["<rootDir>/src/**/*.(test|spec).+(ts|tsx)"],
  collectCoverage: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
