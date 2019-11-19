<template>
  <div>

    <div class="top">
          <div class="log">
            <h2 style="text-align: center;color: #7c391f">健 美 医 疗 平 台</h2>
          </div>
          <div class="msg">
            <img src="../components/static/img/xiaomi.png" />
          </div>
          <div class="docname"><p style="color: white">{{doc.userName}}</p></div>
          <div class="docimg">
            <el-avatar :size="50"><img :src="doc.userPic"/></el-avatar>
          </div>
    </div>
    <div class="body">
      <div class="left">
        <el-row class="tac">
          <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#2f363e"
          text-color="#fff"
          active-text-color="#e95450">
          <el-menu-item index="1" @click="forindex" >
            <i class="el-icon-menu"></i>
            <span slot="title" >回到首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="zuozhen">
            <i class="el-icon-menu"></i>
            <span slot="title">开始坐诊</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航五</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title" @click="goback">返回首页</span>
          </el-menu-item>
          <div class="foot">

          </div>
        </el-menu>
          </el-col>
        </el-row>
      </div>

      <div class="msgright">
        <iframe id="scor" src="http://localhost:1100/#/docwelcome"  width="100%" height="635px"  scrolling="no"  ></iframe>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from  'axios'
  export default {
      data(){
          return{
              doc:{}
          }
      },
    mounted(){
        //查询医生信息
      var id=this.$cookie.get("userMsg");
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
            this.doc=res.data;
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      zuozhen(){
        document.getElementById("scor").src="http://localhost:1100/#/zuozhen"
      },
      forindex(){
        document.getElementById("scor").src="http://localhost:1100/#/docwelcome"
      },
      goback(){
       this.$router.push("/")
      }
    }
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
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
    top: -215%;
  }
  .docimg{
    width: 100px;
    margin-left: 90%;
    position: relative;
    top: -315%;
  }
  .log{
    padding-top: 10px;
    width: 15%;
    height: 54px;
    /*background-color: #13ce66;*/
  }

  .msg{
    width: 50px;
    height: 54px;
    line-height: 54px;
    /* background-color: #13ce66; */
    margin-left: 81%;
    position: relative;
    top: -101%;
  }
  .msg img{
    height: 40px;
    width: 40px;
    margin-top: -2px;
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
  iframe{
    border: none;
  }
  .foot{
    width: 100%;
    height: 300px;
    background-color: #2f363e;
  }
  .el-avatar>img {
    display: block;
    height: 100%;
    vertical-align: middle;
    width: 56px;
    height: 77px;
  }
</style>
