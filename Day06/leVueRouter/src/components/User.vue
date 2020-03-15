<template>
  <div>
    <h1>我是用户界面</h1>
    <h2>我是用户相关信息</h2>
    <h2>{{userId}}</h2>
    <button @click="routerClick()">router</button>
  </div>

</template>

<script>
    export default {
        name: "user",
        computed:{
            userId(){
                //活跃状态的路由当前路由//userId和index中对应//请求路径中的值传递到此界面
                return this.$route.params.userId
            }
        },methods:{
            routerClick(){
                console.log(this.$router);
            }
        }
    }
</script>

<style scoped>

</style>
