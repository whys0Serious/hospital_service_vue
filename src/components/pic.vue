<template>
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
                <div class="info"><el-button type="danger"><router-link to="/userContainer">个人中心</router-link></el-button></div>
                <div class="info"><el-button type="warning" @click="loginOut">注销登陆</el-button></div>
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
    <div id="boday">
      <nav class="nav main-nav" id="nav">
        <ul class="nav-lists layout clearfix">
          <li class="cur"><a @click="shouye">首页</a></li>
          <li><a>平台概况</a></li>
          <li><a>患者服务</a></li>
          <li><a>新闻中心</a></li>
          <li><a @click="keshi">科室介绍</a></li>
          <li><a>医生介绍</a></li>
          <li><a>科研教学</a></li>
          <li><a>党建园地</a></li>
          <li><a>健康咨询</a></li>
        </ul>
      </nav>
    </div>
    <div class="second-nav">
      <div class="second-nav-bg" style="background-image: url(http://static.409yy.com/images/default_bg.jpg);">
        <div class="bg layout" >
          <h2>
            <a>就诊流程</a>
          </h2>
        </div>
      </div>
    </div>
    <div id="liucheng">
      <img src="../components/static/img/003.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{
        flag:false,
        user:[],
      }
    },

    methods:{
      keshi:function () {
        this.$router.push("department")
      },
      shouye:function () {
        this.$router.push("/")
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
      var id= this.$cookie.get("userMsg")
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
        this.user=res.data
        this.flag=true;
      })
      if(this.user!=null&&this.user!=""){
        this.flag=false;
      }
    },
  }
</script>


<style>
  #liucheng{
    width: 100%;
    height: 800px;
    margin-top: 120px;
  }
  .second-nav .second-nav-bg h2 a {
    display: inline-block;
    margin: auto;
    color: #fff;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 48px;
  }
  .second-nav {
    min-width: 1200px;
  }
  .second-nav .second-nav-bg {
    position: relative;
    height: 240px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }
  .second-nav .second-nav-bg .layout {
    padding-top: 75px;
  }
  #boday{
    width: 100%;
    height: 100%;
  }
  .nav{
    min-width: 1200px;
    height: 10%;
    position: relative;
    box-shadow: rgba(0,0,0,0.2) 0px 5px 5px;
    background: -webkit-linear-gradient(90deg, #23565f 0%, #23565f 14%, #368290 100%, #368290 100%);
    background: -moz-linear-gradient(0deg, #23565f 0%, #23565f 14%, #368290 100%, #368290 100%);
    background: linear-gradient(0deg, #23565f 0%, #23565f 14%, #368290 100%, #368290 100%);
  }
  .nav ul.nav-lists {
    display: block;
    font-size: 0;
    text-align: justify;
    text-align-last: justify;
  }
  .nav ul.nav-lists>li {
    display: inline-block;
    line-height: 60px;
  }
  .nav ul.nav-lists>li.cur>a {
    font-weight: bold;
  }
  .nav ul.nav-lists>li>a {
    position: relative;
    display: block;
    height: 60px;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  a{
    color: #555;
    outline: none;
  }
  del, ins, u, s, a, a:hover {
    text-decoration: none;
  }
  a, button {
    cursor: pointer;
  }
  .nav ul.nav-lists>li>a:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: #febd00;
    transition: all .2s;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -o-transition: all .2s;
  }
  .nav ul.nav-lists>li:hover>a:before{
    content: '';
    width: 100%;
  }
  .layout {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
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

