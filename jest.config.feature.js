const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

module.exports = {
  preset: "jest-puppeteer",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  testMatch: ["<rootDir>/feature/**/*.(test|spec).+(ts|tsx)"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "host": `${host}:${port}`
  }
};
