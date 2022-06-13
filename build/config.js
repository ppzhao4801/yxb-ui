var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../src/components.json');

var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`yxb-ui/src/components/${key}`] = `yxb-ui/lib/components/${key}`;
});

Object.keys(Components).forEach(function(key) {
  externals[`element-ui/packages/${key}`] = `element-ui/lib/${key}`;
});

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`yxb-ui/src/utils/${file}`] = `yxb-ui/lib/utils/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;
debugger
exports.alias = {
  src: path.resolve(__dirname, '../src'),
  'yxb-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules/;
