'use strict';

var config = require('./webpack.config.dev');

config.resolve.extensions = ['.electron.js', '.js', '.json', '.jsx', '']
config.target = "electron-renderer"

module.exports = config;