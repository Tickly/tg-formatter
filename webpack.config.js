const webpack = require('webpack'),
    path = require('path')

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        index: './entry'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'tg-formatter',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude:/node_modules/,
        }]
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
}