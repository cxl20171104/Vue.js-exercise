<template>
    <div>
        <h2>我是cpn组件标题</h2>
        <p>-------------</p>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                name:'CXL'
            }
        }
    }
</script>

<style scoped>

</style>