<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from "./Cpn.vue";
    export default {
        name: "App",
        components: {Cpn},
        comments:{
          Cpn
        },
        data(){
            return{
                message:'Hello World'
            }
        },methods:{
            btnClick(){
                console.log('god is far from me');
            }
        }
    }
</script>

<style scoped>
 .title{
     color:red;
 }
</style>