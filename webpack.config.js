/* global process */

const ProjectPackage = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: './bin',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx|\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'es2015'],
          plugins: ['transform-react-jsx'],
        },
      },
      {
        test: /\.html?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(md|MD)$/,
        loader: 'html-loader!markdown-loader?gfm=true',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      title: ProjectPackage.name,
      template: './src/index.ejs',
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.md', '.MD'],
    alias: {
      css: path.resolve(__dirname, './src/css'),
      img: path.resolve(__dirname, './src/img'),
      lib: path.resolve(__dirname, './src/js/lib'),
      modules: path.resolve(__dirname, './src/js/modules'),
    },
  },
  devServer: {
    // contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
  },
};
