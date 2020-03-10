let name='XM';
let age=18;
let flag=true;
function sum(num1,num2){
    return num1+num2;
}
//导出对象-基本写法
export{
    flag,
    sum
};
//导出属性
export let num1=1000;
//导出函数
export function mul(a,b){
    return a*b;
}
//导出类
export class Person{
    run(){
        console.log('在奔跑');
    }
}
//使用者自定义导入 export default
const address='北京市';
//一个js文件只能有一个
export default address;


