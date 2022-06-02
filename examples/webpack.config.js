const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: "./index.js",
  output: {
    path:path.resolve(__dirname,"dist"),
    publicPath:"/",
    filename: '[name].[hash:7].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      examples: path.resolve(__dirname, './examples/src'),
      'yxb-ui': path.resolve(__dirname, '../')
    },
    modules: ['node_modules']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8085,
    hot: true
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimizer: []
  },
  devtool: 'inline-source-map'
};

module.exports = webpackConfig;
