var path = require("path");
var webpack = require("webpack");
var fs = require('fs');
var TerserPlugin = require('terser-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// get the nodeModules
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: {
        'cvrp_module': './dev_source/scripts/cvrp_module.tsx',
    },
    stats: { warnings:false },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: require('os').cpus().length - 1,
                            poolTimeout: Infinity
                        },
                    }, {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    node: {
        // fs: 'empty',
        // console: true,
        // net: 'empty',
        // tls: 'empty'
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: "[name].js"
    },
    target: 'web',
    optimization: {
        //minify settings
        minimize: true,
        // minimizer: [new UglifyJSPlugin({
        //     parallel: true,
        // })]
    },
    // change the mod to production : when export : to dev : development
    mode: 'production',
    //live compile
    watch: true
};