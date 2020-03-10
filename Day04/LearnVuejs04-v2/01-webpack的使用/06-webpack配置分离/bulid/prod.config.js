const uglifyjswebpackPlugin=require('uglifyjs-webpack-plugin');
const webpackMerge=require('webpack-merge');
const baseConfig=require('./base.config');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports=webpackMerge(baseConfig,{

    plugins:[
        //给bundle.js在打包时添加如下文字
        new webpack.BannerPlugin('最终版权归苏维埃'),
        new HtmlWebpackPlugin({
            template:'index.html'//根据此文件作为模板
        }),
        //new uglifyjswebpackPlugin()//压缩js开发时不使用
    ]

})
