module.exports = {
  server: {
    command: "node server.js",
    port: process.env.PORT || 3000,
    debug: true
  },
  launch: {
    args: ["--no-sandbox", "--headless", "--disable-gpu"]
  }
};
