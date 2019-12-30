const path = require('path');

module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development',
    entry: './src/index.js', // webpack already looks for entry point in index.js by default
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    }
}