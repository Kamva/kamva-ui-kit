const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

const root = path.resolve(process.cwd());
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(root, './serve'),
  entry: {
    app: './index.tsx',
  },
  output: {
    path: path.resolve(root, './serve'),
    filename: '[name].bundle.js',
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['tsx', 'ts', '.jsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'package',
      filename: 'index.html',
      template: './index.html',
    }),
    new CheckerPlugin()
  ],
};
