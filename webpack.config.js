const webpack = require('webpack'),
  path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './src'),
  entry: {
    index: './entry.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: {
      // name: 'tg-formatter',
      type: 'commonjs2',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    moment: {
      root: 'moment',
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
    },
    accounting: {
      root: 'accounting',
      commonjs: 'accounting',
      commonjs2: 'accounting',
      amd: 'accounting',
    },
  },
};
