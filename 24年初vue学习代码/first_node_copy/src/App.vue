
<template>
  <el-container>
    <el-header><!-- 头部 -->
        <!--
          el-tabs：标签页标签
          editableTabsValue：绑定值，选中选项卡的name js中定义的属性 表示当前选中的标签页 
          card：卡片风格的标签，更多类型在element组件库查看
          closable：标签是否可关闭
          @tab-remove：删除标签事件，自动触发removeTab方法
          tab-change：改变选中标签事件，自动触发changeTab方法
          注意：这两个方法名为vue已定义好，不可更改，自动传值当前选中的标签name
        -->
        <el-tabs
          v-model="editableTabsValue" 
          type="card"
          class="demo-tabs"
          closable
          @tab-remove="removeTab"
          @tab-change="changeTab"
        >
          <!--
            el-tab-pane：标签页标题内容内容标签
            for循环遍历editableTabs数组，将标签内容放入头部
            key：用于唯一标识每个标签页组件，帮助vue正确管理和更新每个标签组件
            label：选项卡标题
            name：与选项卡绑定值value对应的标识符
          -->
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          />
        </el-tabs>
    </el-header>
    <el-container>
    	<el-aside width="120px"><!-- 左侧导航栏 -->
        <p>
          <el-button @click="changeMenu('/','首页')" type="primary">首页</el-button>
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
  		<el-main><!-- 内容页面 -->
        	<router-view></router-view>
  		</el-main>
	</el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
//用于存储当前页面中打开的标签页
const editableTabs = ref([
  {
    url:'/',
    title:'首页',
    name:'首页'
  }
])
//当前选中的标签页
const editableTabsValue = ref('首页');

//新增标签页
const changeMenu =(url,tabName)=>{
  let isExist = false;//是否存在
  //遍历editableTabs判断已打开标签页中是否有该标签
  editableTabs.value.forEach(item=>{
    if(item.name == tabName){
      isExist = true;
    }
  })
  //没有则新增
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
        //从所有已打开的标签页中找点击的标签位置，使用三目运算
        //如果不是最后一个则[i+1]为true，将editableTabs后面一个赋值给nextTab
        //如果是最后一个则[i+1]为false,将editableTabs前面一个赋值给nextTab
        const nextTab = editableTabs.value[i+1] ? editableTabs.value[i+1] : editableTabs.value[i-1];
        //最后将nextTab赋值给当前选中的标签页editableTabsValue
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
      router.push(item.url);//切换路由
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
</style>
