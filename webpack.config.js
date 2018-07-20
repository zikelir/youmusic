const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./client/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {    
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
};