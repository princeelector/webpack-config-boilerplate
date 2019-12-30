const path = require('path');

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
    mode: 'development',
    entry: {
        main: './src/index.js'
    }, // webpack already looks for entry point in index.js by default
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        publicPath: '/assets/'
    },
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist')
    }
}