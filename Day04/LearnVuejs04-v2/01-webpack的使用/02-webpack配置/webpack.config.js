const path=require('path');
module.exports={
    entry :'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),//nodejs中模块的方法可以拼接地址__dirname是项目的绝对路径
        filename:'bundle.js'
    },

}