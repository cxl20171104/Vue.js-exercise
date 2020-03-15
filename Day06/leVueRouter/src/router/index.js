import Vue from 'vue'
/*来自框架*/
import Router from 'vue-router'
//import home  from '@/components/home'
//import home2  from '@/components/home2'
//import user  from '@/components/user'

//路由懒加载写法//一个懒加载对应一个 static/js中一个js文件
const home =()=> import('@/components/home');
const homeNews=()=>import('@/components/homeNews');
const homeMessage=()=>import('@/components/homeMessage');
const home2 =()=> import('@/components/home2');
const user =()=> import('@/components/user');
const profile=()=>import('@/components/profile');
//1.安装插件
Vue.use(Router)
//2.创建router对象
//3.router对象导出
const router= new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home,
      //嵌套路由
      meta:{
        title:'首页'//路由导航自动设置title
      },
      children:[
        { path:'',
          redirect:'news'},
        {
          path:'news',//不用加斜杠
          component:homeNews
        },{
          path:'message',//不用加斜杠
          component:homeMessage
        }
      ]
    },
    {
      path: '/home2',

      component: home2,
      meta:{
        title:'关于'
        //独享路由守卫
      },beforeEnter(to,from,next){
         console.log('after beforeEnter');
         next();
      }
    },
    {
      path: '/user/:userId',//配置动态路由
      component: user,
      meta:{
        title:'用户'
      }
    },{
      path:'/profile',
      component:profile,
      meta:{
        title:'档案'
      },
    }

  ],
  /*html history模式**/
  mode:'history',
  linkActiveClass:'active'//谁处于活跃状态谁添加此样式统一监听

})
//路由导航守卫(全局守卫)
//前置钩子（回调）
router.beforeEach((to,form,next)=>{
   //from到to
   document.title=to.matched[0].meta.title;
   console.log(to);
   next()
})

router.afterEach((to,from)=>{
  console.log('after');
})

export default router;
