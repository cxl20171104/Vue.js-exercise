//闭包
//模块化ES5
var moduleA=(function(){
    //导出对象
    var obj={};
    var name='小明';
    var age='22';
    function sum(num1,num2){
        return num1+num2;
    }
    var flag=true;
    if(flag){
        console.log(sum(10,20));
    }
    obj.flag=flag;
    obj.sum=sum;
    console.log(obj);
    //模块出口
    return obj;
})()
