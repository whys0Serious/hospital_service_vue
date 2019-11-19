<template>
  <div>
    <div id="app">
      <div id="whole">
        <div id="shoulan">
          <div id="juzhong">
            <div id="logo"><img src="../components/static/img/logo.jpg" height="100%" width="100%" /></div>
            <div class="search">
              <el-autocomplete style="width: 70%;height: 100%" v-model="state" placeholder="请输入内容" @keydown.enter="handleSelect" ></el-autocomplete>
              <el-button icon="el-icon-search" type="success" size="smile" circle @click="handleSelect"></el-button><br/>
              <!--<div id="src"> <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/32aac580.png"/></div>-->
              <span class="seafont">热门搜索：</span>
              <span class="seafdata">感冒</span>
            </div>
            <!--登陆-->
            <div class="userinfo">
              <div v-if="flag">
                <div class="userimg"><img :src="user.userPic" height="100%" width="100%" style="border-radius: 100%"/></div>
                <div class="userimg_left">
                  <div style="float: right;width: 100%"><div style="margin-left: 30%"><span class="logsize">欢迎:</span><span class="logze">{{user.userName}} </span><span class="logsize"> 登陆平台</span></div></div>
                  <div v-if="(user.identity)==('用户')">
                    <div class="info"><el-button type="danger"><router-link to="/userContainer">个人中心</router-link></el-button></div>
                  </div>
                  <div v-if="(user.identity)==('医生')">
                    <div class="info"><el-button type="danger"><router-link to="/docterback">就诊平台</router-link></el-button></div>
                  </div>
                  <div v-if="(user.identity)==('管理员')">
                    <div class="info"><el-button type="danger"><router-link to="/">后台管理</router-link></el-button></div>
                  </div>                  <div class="info"><el-button type="warning" @click="loginOut">注销登陆</el-button></div>
                </div>
              </div>
              <div v-if="!flag">
                <div class="info1"><el-button  type="warning"><router-link to="/regist">注册</router-link> </el-button></div>
                <div class="info1"><el-button type="success"><router-link to="/login">登陆</router-link></el-button></div>
                <div class="info1" style="line-height: 51px;font-size: large;color: #8b3200;font-weight:bolder;font-family:'Times New Roman',Times,serif;">游客您好！立即:</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  style="float: left; margin-top: 20px">
      <!--<router-link  to="/"><span style="background-color:lightblue;color: white">回到首页</span></router-link>-->
    <el-menu
      default-active="3"
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
        <i class="el-icon-document" ></i>
        <span slot="title" @click="showOrder">挂号记录</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
       <span slot="title"><router-link to="/">回到首页</router-link></span>
      </el-menu-item>
    </el-menu>
    </div>
        <iframe  id="srcofmenu" src="http://localhost:1100/#/userOrder" frameborder="0" style="float: left;" width="91%" height="600px" scrolling="no"></iframe>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              flag:false,
              user:[],

            payBack:{
              userId:'',
              orderNum:''
            },
          }
      },
    methods:{
      userMsg(){
        document.getElementById("srcofmenu").src="http://localhost:1100/#/userMsg";
      },
      showHistory(){
        document.getElementById("srcofmenu").src="http://localhost:1100/#/userMedicalhistory";
      },
      showOrder(){
        document.getElementById("srcofmenu").src="http://localhost:1100/#/userOrder";
      },
      loginOut(){
        var id=this.$cookie.get("userMsg")
        axios.get("api/hospital-user-server/loginOut?id="+id).then(res=>{
          this.$message.info("注销成功！")
        })
        this.$cookie.set("userMsg",id,{
          expires:0})
        this.flag=false;
        this.$router.go(0)
      }
    },
    mounted(){
      var check=this.$cookie.get("userMsg");
      if(check==null||check==""){
          this.$message.error("操作异常！！")
          this.$router.push("/")

      }
      var id= this.$cookie.get("userMsg")
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
        this.user=res.data
        this.flag=true;
      })
      if(this.user!=null&&this.user!=""){
        this.flag=false;
      }

      /*
       * 支付成功回调时修改订单状态
       * */
      this.payBack.orderNum=this.$route.query.out_trade_no;
      this.payBack.userId=id
      axios.post("api/hospital-alipay-server/payback",this.payBack).then(res=>{
      })
    },
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
  /*
   头部
   */
  *{
    padding:0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #whole{
    width: 100%;
    height: 30%;
    /*background-color: #f4f4f4;*/
  }
  #shoulan{
    width: 100%;
    height: 100%;
    display: flex;
  }
  #juzhong{
    width: 85%;
    margin: auto;
    /*background-color: #3a8ee6;*/
    height: 100%;
  }
  #logo{
    width: 30%;
    height: 100%;
    float: left;
  }
  .search{
    width: 40%;
    height: 100%;
    float: left;
    margin-top: 2%;
  }
  .userinfo{
    width: 30%;
    height: 100%;
    float: left;
    /*background-color: #3a8ee6;*/
  }
  .userimg{
    float: right;
    margin-top: 1%;
    width: 20%;
    height: 20%;
  }
  .userimg_left{
    float: left;
    margin-top: 1%;
    width: 80%;
    height: 100%;
  }
  .info{
    float: right;
    margin-top: 3%;
    margin-right: 4%;
  }
  .info1{
    float: right;
    margin-top: 8%;
    margin-right: 4%;
  }
  .logsize{
    color: #9fa6b0;
  }
  .logze{
    color: #cc360c;
    font-weight: bolder;
  }
  .seafont{
    font-size: 13px;
    float: left;
    margin-left: 11%;
  }
  .seafdata{
    font-size: 13px;
    float: left;
  }
</style>
