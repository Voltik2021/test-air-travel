const HtmlWebpackPlagin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: 'index.html'
        }),

    ],
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    }    
}