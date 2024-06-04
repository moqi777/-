<template>
  <el-container>
    <el-header>

      <el-tabs
        v-model="editableTabsValue" 
        type="card" 
        class="demo-tabs" 
        closable
        @tab-remove="removeTab"
        @tab-change="changeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        ></el-tab-pane>
      </el-tabs>

    </el-header>
    <el-container>

      <el-aside width="120px">
        <p>
          <el-button @click="changeMenu('/','首页')" >首页</el-button>
        </p>
        <p>
          <el-button @click="changeMenu('/products','产品页')" type="primary">产品页</el-button>
        </p>
        <p>
          <el-button @click="changeMenu('/carts','购物车页')" type="primary">购物车</el-button>
        </p>
        <p>
          <el-button @click="changeMenu('/news','新闻页')" type="primary">新闻</el-button>
        </p> 
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const editableTabs = ref([
  {
  url:'/',
  title:'首页',
  name:'首页'
  },
  // {
  //   title:'产品页',
  //   name:'2'
  // },
  // {
  //   title:'购物车页',
  //   name:'3'
  // }
])
const editableTabsValue = ref('首页');//当前选中的是哪个标签页

//新增标签页
const changeMenu =(url,tabName)=>{
  let isExist = false;//是否存在
  editableTabs.value.forEach(item=>{
    if(item.name == tabName){
      isExist = true;
    }
  })
  if(!isExist){
    editableTabs.value.push({url:url,title:tabName,name:tabName});
  }
  editableTabsValue.value = tabName;//更改当前选中的标签
  router.push(url);//动态切换路由地址
}
//删除标签页，targetName是删除的标签页的name
const removeTab =targetName=>{
  //如果删除的是当前标签页，则自动跳转到下一个标签页
  //如果当前标签页已是最后一个标签页，则跳转到前一个标签页
  if(editableTabsValue.value == targetName){
    editableTabs.value.forEach((item,i)=>{
      if(item.name == targetName){
        const nextTab = editableTabs.value[i+1] ? editableTabs.value[i+1] : editableTabs.value[i-1];
        editableTabsValue.value = nextTab.name;
      }
    })
  }
  //过滤 要删除的标签页
  editableTabs.value = editableTabs.value.filter(tab => tab.name != targetName);
  //删除当前所在的标签页后跳转指定标签页
  changeTab(editableTabsValue.value);
}
//点击标签页的跳转
const changeTab = targetName=>{
  editableTabs.value.forEach(item=>{
    if(item.name == targetName){
      router.push(item.url);
    }
  })
}
</script>

<style scoped>
.demo-tabs{
  margin-left: 200px;
  margin-top: 20px;
  width: 80%;
}
.demo-tabs > .el-tabs_content{
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
/*
1、增加一个路由配置的js文件
  在这个js文件中，对每个vue组件配置好请求地址(path)
  export导出router
2、在main.js文件中，导入router并vue.use(router)
3、在App.vue中 写好<router-link to="跳转地址">
  及<router-view>
*/
</style>
