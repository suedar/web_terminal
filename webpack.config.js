/**
 * @file: Describe the file
 * @Author: suedar
 * @Date: 2019-01-29 16:07:23
 * @Last Modified by: suedar
 * @Last Modified time: 2019-01-31 14:09:43
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/main.js', // 入口文件的配置项
    mode: 'development',
    output: { // 出口文件的配置项
        path: __dirname + '/dist', // 打包的路径文职
        filename: 'bundle.js',// 此格式写法后续会提到为什么
        // publicPath:'/dist/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        host: '127.0.0.1'
    },
    resolve: { // 解析模块的可选项
        // modules: [ ]//模块的查找目录 配置其他的css等文件
        extensions: ['.js', '.json', '.jsx', '.less', '.css'],  // 用到文件的扩展名
        alias: { // 模快别名列表
            utils: path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules:[
            {
                test: /\.js$/,  // 解析文件类型
                exclude: /node_modules/,  // 排除node_modules文件
                loader: 'babel-loader', // 使用哪种loader解析,
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash].[ext]'
                    }
                }]
            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     },
    //     minimizer: [new UglifyJsPlugin()],
    // },
    plugins: [
        // 提取公共代码
        // new CleanWebpackPlugin(
        //     ['dist/main.*.js','dist/manifest.*.js'],
        //     {
        //         root:__dirname,
        //         verbose:true,
        //         dry:false
        //     }
        // ),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
        }),
    ]
};