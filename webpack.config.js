const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html页面
const ExtracTextPlugin = require('extract-text-webpack-plugin') // 预渲染、可以处理sourceMap、提取bundle中的css

const output = {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js' // 名字后面添加hash值
}

const plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
        template: path.resolve(__dirname, './lib/index.tpl.html')
    }),
    new ExtracTextPlugin('[name].[hash].css')
]

module.exports = {
    context: path.resolve(__dirname, './lib'),
    entry: {
        app: './app.js'
    },
    output: output,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: ExtracTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    devServer: {
        host: '127.0.0.1',
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true
    },
    plugins: plugins
}