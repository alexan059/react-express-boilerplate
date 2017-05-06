const path = require('path');
const express = require('express');

const app = express();

const setupServer = () => {
    const indexPath = path.resolve(__dirname, '../public/index.html');
    const publicPath = path.resolve(__dirname, '../public');

    app.use(express.static(publicPath));

    app.get('*', (_, res) => {
        res.sendFile(indexPath);
    });
};


module.exports = {app, setupServer};