const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'app': [
            './client/index.js',
            // Hot Plugin
            'webpack-hot-middleware/client',
            'webpack/hot/dev-server'
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: '[name].bundle.js',
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
            // SASS
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css','.scss']
    },
    plugins: [
        // Hot Plugin
        new webpack.HotModuleReplacementPlugin()
    ]
};