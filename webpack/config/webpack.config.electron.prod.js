'use strict';

var config = require('./webpack.config.prod');

config.resolve.extensions = ['.electron.js', '.js', '.json', '.jsx', '']
config.target = "electron-renderer"

module.exports = config;