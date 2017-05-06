const path = require('path');
const express = require('express');
// const {app} = require('./server/server');

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

const app = express();

if (env !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack.config');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));

}

const indexPath = path.resolve(__dirname, './public/index.html');
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.get('*', (_, res) => {
    res.sendFile(indexPath);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Server running on port ${port}.`);
});
