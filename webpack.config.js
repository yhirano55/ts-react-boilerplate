const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const mode = process.env.NODE_ENV || "development";
  const isProduction = mode === "production";

  return {
    mode: mode,
    entry: {
      main: [path.resolve(__dirname, "src/index.tsx")]
    },
    output: {
      filename: isProduction ? "bundle.[chunkhash].js" : "[name].js",
      path: path.resolve(__dirname, "dist")
    },
    devtool: isProduction ? false : "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    optimization: {
      splitChunks: {
        name: "vendor",
        chunks: "initial",
      }
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      })
    ]
  }
}
