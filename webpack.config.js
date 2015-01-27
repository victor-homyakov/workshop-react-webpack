/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';

var webpack = require('webpack');

module.exports = {

    output: {
        filename: 'main.js',
        publicPath: '/assets/'
    },

    cache: true,
    debug: true,
    devtool: false,
    entry: [
        'webpack/hot/only-dev-server',
        './src/scripts/components/main.js'
    ],

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        preLoaders: [{
            test: '\\.js$',
            exclude: 'node_modules',
            loader: 'jshint'
        }],

        loaders: [
            {
                test: /\.js$/,
                loader: 'react-hot!jsx-loader?harmony'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },

            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff2"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
