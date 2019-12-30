const path = require('path');
const webpack = require('webpack');

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
*/


module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development', // use production when deploying
    entry: {
        main:  './src/index.js'
    }, // webpack already looks for entry point in index.js by default
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        publicPath: '/assets/'
    },
    devServer: {
        port: 3001,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false, // already set to false by default
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}