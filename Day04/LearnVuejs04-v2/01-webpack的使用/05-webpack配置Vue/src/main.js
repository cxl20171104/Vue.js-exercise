const {add,mul}=require('./js/mathUtils');
console.log(add(20,30));
console.log(mul(8,9));
import{name,age} from './js/info'
console.log('姓名:'+name);
console.log(age+'岁');
//3.依赖css文件 安装+配置
require('./css/normal.css');
//4.依赖less文件 安装+配置
require('./css/special.less');
//5.写文字
document.writeln("<h2>IQY</h2>");
//6.使用Vue
import Vue from 'vue'
import App from './vue/App.vue'
const app=new Vue({
   el:'#app',
    template:`<App/>`,
    components:{
       App
    }
});
document.writeln("<button>CXL----2056-呵呵</button>")
