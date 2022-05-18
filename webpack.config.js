const fs = require('fs');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/app/index.html",
  filename: "./index.html"
})

module.exports = {
  entry: "./src/app",
  output: {
    path: path.resolve(__dirname, "../server/client_build/dist"),
    filename: "bundle.js",
  },
  "devServer": {
    "port": 3000,
    "hot": true,
    "open": true,
    'static': { 
      directory: __dirname + '/public/'
    },
    "proxy": {
      "/": {
        "target": "http://localhost:3000",
        "router":  () => "http://127.0.0.1:3001"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
            loader: 'url-loader'
          }
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [htmlPlugin]
};