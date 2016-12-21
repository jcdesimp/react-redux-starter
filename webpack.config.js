"use strict";
/* global process */

const ProjectPackage        = require('./package');
const webpack               = require('webpack');
const path                  = require("path");
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx|\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-react-jsx"]
                }
            },
            {
                test: /\.html?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'file-loader'
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            },
            { 
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(md|MD)$/,
                loader: 'html!markdown?gfm=true'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //  compress: {
        //      warnings: false,
        //  },
        //  output: {
        //      comments: false
        //  }
        // }),
        new HtmlWebpackPlugin({
            title: ProjectPackage.name,
            template: './src/index.ejs',
            inject: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin("[name].css")
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", ".md", ".MD"],
        alias: {
            "css": path.resolve(__dirname, "./src/css"),
            "img": path.resolve(__dirname, "./src/img"),
            "lib": path.resolve(__dirname, "./src/js/lib"),
            "modules": path.resolve(__dirname, "./src/js/modules")
        }
    }
};
