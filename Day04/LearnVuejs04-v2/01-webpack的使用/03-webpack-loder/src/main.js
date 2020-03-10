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