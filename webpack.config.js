const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude : /node_modules/,
            loader: 'babel-loader',
            query: {
                presets:['@babel/preset-env']
            }
        }]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src',
                    to: path.resolve(__dirname, 'dist'),
                    globOptions: {
                        ignore: [
                            '**/*.js'
                        ]
                    }
                }
            ]
        })
    ]
}