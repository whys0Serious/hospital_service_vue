<template>
  <div class="container-fluid" >
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><router-link to="/">回到首页</router-link></el-menu-item>
    </el-menu>
    <div style="float: left;height: 550px;overflow: auto" >
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu  default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1" @click="addmes">添加药品</el-menu-item>
            <el-menu-item index="1-2" @click="selectDrug">查看药品</el-menu-item>
            <el-menu-item index="1-3" @click="selectecharts">药品echarts</el-menu-item>
            <el-menu-item index="1-4" @click="addocmsgs">添加医生</el-menu-item>
            <el-menu-item index="1-5" @click="selectdoc">查询医生</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-6"  @click="selectdepart">科室查询</el-menu-item>
            <el-menu-item index="1-7" @click="addpart">添加科室</el-menu-item>
            <el-menu-item index="1-8" @click="adddocshedule">添加医生排班</el-menu-item>
            <el-menu-item index="1-9" @click="selectdocshedule">查询排班</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">轮播图管理</span>
            <el-menu-item index="1-4-1" @click="addlbtmsg">添加轮播图</el-menu-item>
            <el-menu-item index="1-4-1" @click="selectlbtmsg">查看轮播图</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
      <iframe  id="srcofmenu" src="http://localhost:1100/#/selectdrug" style="float: left;" width="80%" height="600px" scrolling="auto"></iframe>
  </div>
</template>
<script>
  export default {
    name: 'App',
    methods:{
      handleOpen(key, keyPath) {
      },
      selectDrug(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/selectdrug"
      },
      addmes(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/adddrug"
      },
      selectdepart(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/selectdepart"
      },
      addpart(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/addpart"
      },
      adddocshedule(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/adddocshedule"
      },
      selectdocshedule(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/docshedule"
      },
      addocmsgs(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/addocmsg"
      },
      selectdoc(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/selectdocmsg"
      },
      selectecharts(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/selectecharts"
      },
      addlbtmsg(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/addlbtmsg"
      },
      selectlbtmsg(){
          document.getElementById("srcofmenu").src="http://localhost:1100/#/selectlbtmsg"
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data(){
      return{
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: false
      }
    },
    mounted(){
    }
  }
</script>
<style>
  .mybody{
    background-color: rgba(122,122,122,0.2);
    float: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
