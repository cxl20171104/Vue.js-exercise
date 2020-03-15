<template>
   <div>
     <h1>我是profile</h1>
     <h2>{{$route.query.name}}</h2><!--另一种传递参数的方法-->
     <h3>{{$route.query.age}}</h3>
   </div>
</template>

<script>
    export default {
        name: "profile",
        created() {
            console.log("------created-------");
        },destroyed() {
            console.log("------destroyed----")
        }
    }
</script>

<style scoped>

</style>
