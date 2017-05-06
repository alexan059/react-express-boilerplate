const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index': [
            './client/index.js',
            // Hot Plugin
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/js/'),
        filename: 'bundle.js',
        // Hot Plugin: The publicPath will set the files where the browser expects them
        publicPath: 'http://localhost:3000/js/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './client'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                // Use options instead of .babelrc
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        // Hot Plugin
        new webpack.HotModuleReplacementPlugin()
    ]
};