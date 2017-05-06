const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': [
            './client/index.js',
            // Hot Plugin
            'webpack-hot-middleware/client'
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: '[name]-[hash].bundle.js',
        // Hot Plugin: the publicPath will set the files where the browser expects them
        publicPath: 'http://localhost:3000/'
    },
    module: {
        rules: [
            // React and ES2015
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './client'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                // Hot Plugin: use options instead of .babelrc
                options: {
                    presets: ['es2015', 'react']
                }
            },
            // Sass
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // HTML
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css','.scss']
    },
    plugins: [
        // Hot Plugin
        new webpack.HotModuleReplacementPlugin(),
        // Inject HTML
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};