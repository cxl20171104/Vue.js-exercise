import Vue from 'vue'
import Router from 'vue-router'
//此VueRouter是自己自定义引入暴露出来的，即是自定义的，以下的VueRouter同样是这样
// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const home=()=>import('@/views/home/home')
const cart=()=>import('@/views/cart/cart')
const category=()=>import('@/views/category/category')
const profile=()=>import('@/views/profile/profile')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/category',
      component:category
    }
  ],mode:'history'
})
