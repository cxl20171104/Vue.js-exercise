<template>
  <div>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <1--具名插槽-->
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/shop.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shop_active.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
    //1.导入组件
    import TabBar from "../components/tabbar/TabBar";
    import TabBarItem from "../components/tabbar/TabBarItem";
    export default {
        name: "mainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
