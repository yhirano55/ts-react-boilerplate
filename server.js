const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
const env = process.env.NODE_ENV || "development";

app.use(express.static(path.join(__dirname, "dist")));
app.listen(port, host, () => {
  console.log(`[${env}] express server listening on ${host}:${port}`);
});
