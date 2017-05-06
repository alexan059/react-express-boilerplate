const path = require('path');
const express = require('express');

const app = express();

const setupServer = () => {
    const publicPath = path.resolve(__dirname, '../public');

    app.use(express.static(publicPath));

    // Set up routes here...
};


module.exports = {app, setupServer};