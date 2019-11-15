<template>
  <div>

    <div class="top">
          <div class="msg">
            <img src="../components/static/img/xiaomi.png" />
          </div>
          <div class="docname"><p style="color: white">张小米</p></div>
          <div class="docimg">
            <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          </div>
    </div>
    <div class="body">
      <div class="left">
        <el-row class="tac">
          <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#20335d"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
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
          </el-col>
        </el-row>
      </div>

      <div class="msgright">
        <iframe id="scor" src="http://localhost:1100/#/docwelcome"></iframe>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    mounted(){

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .top{
    width: 100%;
    height: 54px;
    background-color: #99a9bf;
  }
  .el-col {
    border-radius: 4px;
  }
  .docname{
    width: 100px;
    height: 54px;
    line-height: 54px;
    /*background-color: #13ce66;*/
    margin-left: 86%;
    position: relative;
    top: -97%;
  }
  .docimg{
    width: 100px;
    margin-left: 90%;
    position: relative;
    top: -106px;
  }
  .msg{
    width: 100px;
    height: 54px;
    line-height: 54px;
    /*background-color: #13ce66;*/
    margin-left: 81%;
  }
  .msg img{
    height: 40px;
    width: 40px;
    margin-top: 7px;
  }
  .el-col-12 {
    width: 100%;
  }
  .left{
    float: left;
    width: 15%;
  }
  .msgright{
    float: right;
    width: 85%;
  }
</style>
