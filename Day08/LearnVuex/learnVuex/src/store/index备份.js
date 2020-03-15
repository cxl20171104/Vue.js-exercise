import Vue from 'vue'
import Vuex from 'vuex'
import {CXL, HD, YB,HDPROMISE} from './mutations-types'
//1.安装插件
Vue.use(Vuex)

const moduleA={
  state:{
    name:'张三'
  },mutations:{
    //rootState为根目录的state
    updateName(state,rootState){
       state.name="HHHHHH"
    }
  },getters:{
    fullname(state){
      return '<moduleGetter>'
    }
  },actions:{
    //这里仅提交本模块内的的mutations
  }
}



//2.创建对象
const store=new Vuex.Store({
  //变量
  state:{
     counter:1,
     cxl:'cxl',
     students:[{id:110,name:'cxl',age:18},{id:111,name:'cxl2',age:10},{id:112,name:'cxl3',age:20}],
    info:{
       name:'cxl',
       age:40,
       height:1.98
    }
   },
  mutations:{
    //方法 修改state必须经过此方法
    incremert(state){
      state.counter++;
    },
    //细节
    incremertCount(state,count){
      state.counter= state.counter+count;
    },addStudent(state,student){
      state.students.push(student);
    },updateInfo(state){
       state.info.name="fuck"
    },updateInfoR(state){
      //增加属性响应式//应使用vue内部方法
      Vue.set(state.info,'address','洛杉矶')
    },updateInfoS(state){
      Vue.delete(state.info,'age')
    },[CXL](state){
      state.cxl='cxl is best';
    },[YB](state){
      state.info.name='异步处理';
    }
  },
  //异步处理需要此环节
  actions:{
    //定义一个方法
    [YB](context,payload){
      setTimeout(()=>{
        context.commit(YB);//执行此代码证明成功执行 返回成功消息
        console.log(payload)
      },5000)
    }, [HD](context,payload){
      setTimeout(()=>{
        context.commit(YB);//执行此代码证明成功执行 返回成功消息
        console.log(payload.message)
        payload.success();
      },5000)
    },[HDPROMISE](context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit(YB);
          console.log(payload)
          resolve()
        },1000)
      })
    }
  },
  //经过变化之后
  getters:{
     powerCounter(state){
       return state.counter*state.counter;
     },
      more20(state){
      //过滤数组的函数式
      return state.students.filter(s=>{
        return s.age>=20;
      })
    },
    more20Length(state,getters){
      return  getters.more20.length
    },moreAgeStu(state){
       return age=> {
         return state.students.filter(s=>{
           return s.age>=age;
         })
       }
    }
  },
  //各分组件定义
  modules:{
    a:moduleA
  }
})
//导出store独享
export default  store
