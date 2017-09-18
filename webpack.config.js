
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractWebpackPlugin = require("extract-text-webpack-plugin")
var webpack  = require("webpack")
module.exports = {
    entry:'./src/app.js',//人口文件,
    output:{
        path:__dirname+'/build',
        filename:'app.js'
    },
    devServer:{
        proxy:{
            '/list':{
                target:'https://m.toutiao.com',
                changeOrigin:true,
                secure:false
            },
            '/api':{
                target:'https://m.toutiao.com',
                changeOrigin:true,
                pathRewrite: {'^/api' : ''}
            }
        },
		contentBase:'./build',//服务器要在哪个地方开启，默认是在webpack.config.js的路径中
		port:9000,//端口
		host:'localhost',//域名
		historyApiFallback:true//是否使用history的go方法
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new ExtractWebpackPlugin({
            filename:'app.css',
            allChunks:true
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module:{
        loaders:[
            // {
            //     test:/\.css$/,
            //     loader:'style-loader!css-loader'
            // },
            // {
            //     test:/\.scss$/,
            //     loader:'style-loader!css-loader!sass-loader'
            // },

            {
                test:/\.css$/,
                loader:ExtractWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.scss$/,
                loader:ExtractWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })
            },
            // {
            //     test:/\.js$/,
            //     loader:'jsx-loader'
            // },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react']
                 }
            }

        ]
    }
}