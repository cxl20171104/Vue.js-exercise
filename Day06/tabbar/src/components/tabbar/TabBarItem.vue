<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <!--因为插槽会被全部替换所以字体颜色动态设置需要加div-->
    <div :style="activeStyle"><slot  name="item-text"></slot></div>
  </div>

</template>
<script>
    export default {
        name: "tabBarItem",
        props:{
          path:String,
            activeColor:{
              type:String,
                default:'red'
            }
        },

        data(){
        return{

        }
    },methods:{
            itemClick(){
                console.log('itemClick');
                this.$router.replace(this.path);
            }
        },
        computed:{
            //控制按钮图片显示
            isActive(){
                return this.$route.path.indexOf(this.path)>=0
            },
            //控制文字颜色
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
        }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

</style>
