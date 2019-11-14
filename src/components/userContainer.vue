<template>
  <div>
    <div  style="float: left; margin-top: 20px">
      <!--<router-link  to="/"><span style="background-color:lightblue;color: white">回到首页</span></router-link>-->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#ffff"
      text-color="hsl(186, 64%, 56%);"
      active-text-color="hsl(186, 64%, 56%);">

      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="userMsg">个人信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="showHistory">查看病历</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title" @click="">挂号记录</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
       <span slot="title"><router-link to="/">回到首页</router-link></span>
      </el-menu-item>
    </el-menu>
    </div>
        <iframe  id="srcofmenu" src="http://localhost:9100/#/userMsg" frameborder="0" style="float: left;" width="91%" height="600px" scrolling="no"></iframe>
  </div>
</template>
<script>
  export default{
      data(){
          return{
          }
      },
    methods:{
      userMsg(){
        document.getElementById("srcofmenu").src="http://localhost:9100/#/userMsg";
      },
      showHistory(){
        document.getElementById("srcofmenu").src="http://localhost:9100/#/userMedicalhistory";
      }
    },
    mounted(){
      var check=this.$cookie.get("userMsg");
      if(check==null||check==""){
          this.$message.error("操作异常！！")
          this.$router.push("/")

      }
    }
  }
</script>
<style>
  .el-menu {
    border-right: solid 1px #d5e5ff;
    list-style: none;
    position: relative;
    padding-left: 0;
    width: 20%;
    height: 600px;
  }
  .el-menu-item {
    margin-top: 25px;
    background-color: white;
  }
  .el-menu {
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    padding-left: 0;
    background-color: #FFF;
    width: 15%;
    height: 600px;
  }
</style>
