const path=require('path');


const uglifyjswebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports={
    entry :'./src/main.js',
    output:{
        //nodejs中模块的方法可以拼接地址__dirname是项目的绝对路径
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
        //publicPath:'dist/'//图片路径设置 在url前面拼接路径
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loder:负责加载css,不负责解析
                //style-loder:负责解析css
                use: [ 'style-loader','css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {   //图片加载的loader配置
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //比图片大时使用base64，小于图片时使用file-loader
                            limit: 15000,
                            name:'img/[name].[hash:8].[ext]'//自定义图片文件名
                        }

                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {//ES6转ES5
                        presets: ['es2015']
                    }
                }
            },{
                test:/\.vue$/,
                use: ['vue-loader']

            }
        ]
    },
    resolve:{
        //alias:别名
        alias:{//指定Vue版本
            'vue$':'vue/dist/vue.esm.js'
        }
    }



}
