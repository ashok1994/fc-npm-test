const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode : 'production',
  entry : './src/script.es6.js',
  
  output : {
    path : path.resolve(__dirname, "dist"),
    filename : "webpack.bundle.js",
  },
}