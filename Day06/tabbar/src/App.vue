<template>
  <div id="app">
     <!--3.使用组件-->
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import mainTabBar from "./components/mainTabBar";
export default {
    name: 'App',
    //2.注册组件
    components:{
        mainTabBar
    }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
