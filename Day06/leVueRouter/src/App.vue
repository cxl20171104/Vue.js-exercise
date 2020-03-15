<template>
  <div id="app">
    <!--tag渲染属性-->
    <!--replace=replaceState-->
    <!--自定义点击class 默认为router-link-active  active-class=-->
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/home2" replace>关于</router-link>
    <button @click="firstPage">首页2</button>
    <button @click="about">关于2</button>
    <!--属性绑定值使用v-bind 简写为:XX-->
    <router-link :to="'/user/'+userId" >用户</router-link>
<!--    <router-link to="/profile">档案</router-link>-->
    <router-link :to="{path:'/profile',query:{name:'cxl',age:'30'}}">档案（另一种传递参数方法）</router-link>
    <button @click="profileClick()">档案（通过button传递参数）</button>

    <!--组件渲染到当前位置-->
    <keep-alive exclude="Profile"><!--keep-alive：防止组件频繁加载-->
      <!--exclude排除在外-->
      <!--\d{2,9}-->
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
      return{
          userId:'cxl12900'
      }
    },
    methods:{
      //按钮如何切换网页
      firstPage(){
        console.log("firstPage");
        //一切请求经过路由//push ,replace
        this.$router.push("/home");
      }, about(){
          console.log("about");
          this.$router.push("/home2");
        }, profileClick(){
          this.$router.push({//button按钮传递参数
                path:'/profile',
                query:{
                     name:'cxl2',
                     age:'18'
                }});
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active{
    color:red;
  }
</style>
