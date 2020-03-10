
const webpackMerge=require('webpack-merge');
const baseConfig=require('./base.config');
module.exports=webpackMerge(baseConfig,{
    devServer:{//搭建本地服务器
        contentBase:'./dist',//监听位置//修改代码界面可以自动刷新
        inline:true//实时监听
    }
});
