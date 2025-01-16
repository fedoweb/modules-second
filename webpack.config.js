const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    HtmlWebpackPlugin.loader,
                    'html-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            ilename: './index.html',
        }),
        new MiniCSSExtractPlugin()
    ]
}