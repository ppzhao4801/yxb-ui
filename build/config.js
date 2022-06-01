var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../src/components.json');

var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`yxb-ui/src/packages/${key}`] = `yxb-ui/lib/${key}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  src: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../src/packages'),
  'yxb-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules/;
