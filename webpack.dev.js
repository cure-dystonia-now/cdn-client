const webpack = require("webpack");
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
    ]
  },
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: "development" })
  ]
});