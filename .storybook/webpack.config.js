const autoprefixer = require("autoprefixer");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss", ".jpg", ".jpeg", ".gif", ".png", ".bmp", ".tiff", "woff", "eot", "ttf", ".svg", ".ico"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: "[name]-[local]-[hash:base64:5]",
              sourceMap: true,
              minimize: false
            }
          },
          {
            loader: "typed-css-modules-loader",
            options: {
              camelCase: true,
              searchDir: "./src",
              outDir: "./typings"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer()
              ]
            }
          }, {
            loader: "sass-loader"
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif|bmp|tiff|woff|eot|ttf|svg|ico)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: []
};
