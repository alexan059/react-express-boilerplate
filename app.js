const express = require('express');
const Server = require('./server/server');

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

const app = Server.app;

if (env !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack.config');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        quite: true,
        stats: {
            colors: true
        },
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

// Hot Plugin: Configure server AFTER environment setup
Server.setupServer();

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Server running on port ${port}.`);
});
