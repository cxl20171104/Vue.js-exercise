<template>
  <div>

    <h1>首页</h1>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <!--子路由显示的组件在此处-->
    <h1>{{message}}</h1>

      <router-view/>



  </div>

</template>

<script>
    export default {
        name: "home",
        data(){
            return {
                message:"cccccc",
                path:'/home/news'
            }
        },
        //创建完dom后的回调函数
        mounted() {
           console.log('mounted');
        },
        created() {
            console.log('created');

           // document.title='首页'
        },destroyed(){
            console.log('destroyed')
        },
        updated() {
            console.log('updated');
            //活跃时和keep-alive时才有效
        },activated() {

            //不活跃
        },beforeRouteLeave(to,from,next){
            this.path=this.$route.path;
            next()
        }
    }
</script>

<style scoped>

</style>
