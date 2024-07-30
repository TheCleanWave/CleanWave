const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '..', 'public', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.tsx$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css']
    }
}