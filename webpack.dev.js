const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: "index.html"
    }
  }
});
