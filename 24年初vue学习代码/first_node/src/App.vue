<script setup>

</script>

<template>
  <!-- <el-container>
    <el-header><img src="/364900f176fa0f7375efc67498968722.jpg" height="70" width="100%"></el-header>
    <el-container>
      <el-aside width="120px">
        <p>
          <el-button type="primary">首页</el-button>
          <router-link to="/">首页</router-link>
        </p>
        <p>
          <el-button type="primary">产品页</el-button>
          <router-link to="/products">产品页</router-link>
        </p>
        <p>
          <el-button type="primary">购物车</el-button>
          <router-link to="/carts">购物车页</router-link>
        </p>
        <p><el-button type="primary">新闻</el-button></p> 
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container> -->
  <p><router-link to="/">首页</router-link></p><br>
  <p><router-link to="/products">产品页</router-link></p><br>
  <p><router-link to="/carts">购物车页</router-link></p>
  <router-view></router-view>
</template>

<style scoped>
/*
1、增加一个路由配置的js文件
  在这个js文件中，对每个vue组件配置好请求地址(path)
  export导出router
2、在main.js文件中，导入router并vue.use(router)
3、在App.vue中 写好<router-link to="跳转地址">
  及<router-view>
*/
</style>
