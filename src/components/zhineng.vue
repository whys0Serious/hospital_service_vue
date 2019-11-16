<template>
  <div>
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
          <li><a>科室介绍</a></li>
          <li><a  @click="yisheng">医生介绍</a></li>
          <li><a>科研教学</a></li>
          <li><a>党建园地</a></li>
          <li><a>健康咨询</a></li>
        </ul>
      </nav>
      <div class="second-nav">
          <div class="second-nav-bg" style="background-image: url(http://static.409yy.com/images/default_bg.jpg);">
              <div class="bg layout">
                  <h2>
                    <a>智能导诊</a>
                  </h2>
              </div>
          </div>
      </div>
      <div class="zhuti">
          <div class="zhutu">
            <img src="http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3JKK6ARAaQAAPcB-fqiaY40..jpg"/>
            <button class="yk" @click="show = !show"></button>
            <button class="xh"  @click="xhk=!xhk&&show==show">消化科门诊</button>
            <button class="xx" >心血管内科门诊</button>
            <button class="ggk" >骨外科门诊</button>
          </div>


        <div class="zhisearch">
          <!--头部类-->
          <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="el-fade-in-linear">
              <div  v-show="show==false" class="transition-box">选择您不舒服的部位</div>
            </transition>
            <transition name="el-fade-in-linear">
              <div v-show="show" class="tui">推荐门诊</div>
            </transition>
            <transition name="el-fade-in-linear">
              <div v-show="show" class="transition-box">眼科门诊</div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">耳鼻喉科门诊</div>
            </transition>
            <transition name="el-fade-in">
              <div v-show="show" class="transition-box">口腔科门诊</div>
            </transition>
          </div>



        </div>



      </div>



      <!--foot 没做呢，对着图片这样弄出来-->
      <div class="foott">
        <img src="../components/static/img/微信截图_20191111210359.png"  style="height: 100%;width: 100%"/>
      </div>

    </div>

  </div>
</template>

<script >
  export default {
    data(){
      return{

      }
      return{
        show: false,
        xhk:false,
      }
    },
    methods:{
      shouye () {
        this.$router.push("/")
      },
      yisheng () {
        this.$router.push("docter")
      },
      fun(){

      }
    }
  }
</script>




<style >
*{
  padding: 0;
  margin: 0;
}
  #boday{
    width: 100%;
    height: 100%;
  }
  .nav{
    min-width: 1200px;
    height: 60px;
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
  .layout {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .second-nav .second-nav-bg h2 a {
    display: inline-block;
    margin: auto;
    color: #fff;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 48px;
  }
  .zhuti{
    width: 100%;
    height: 800px;
    margin: auto;
    background-color: #08080a;
  }
  .tui {
    margin-left: 20px;
    font-size: 20px;
    color: #fc9898;
    width: 176px;
    z-index: 9999;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #08080a;
    text-align: center;
    color: #fff;
    padding: 200px 0px;
    box-sizing: border-box;
    margin-right: 20px;
    font-size: 20px;

  }

  .zhutu img {
    width: 100%;
    height: 95%;
  }
  .zhutu{
    width: 60%;
    height: 100%;
    float: left;
  }
  .zhisearch{
    width: 40%;
    height: 60%;
    background-color: #08080a;
    float: right;
  }
  .yk {
    width: 50px;
    background:none;
    border:none;
    outline:none;
    color: #13ce66;
    position: relative;
    top: -100%;
    left: 18%;
     z-index: 9996;
    height: 60px;
  }
  .xh{
    color: #13ce66;
    position: relative;
    top: -75%;
    left: 11%;
     z-index: 9997;
    height: 60px;
  }
  .xx{
    color: #13ce66;
    position: relative;
    top: -88%;
    left: 2%;
     z-index: 9998;
    height: 60px;
  }
  .ggk{
    color: #13ce66;
    position: relative;
    top: -40%;
    left: -12%;
     z-index: 9999;
    height:250px;
    width: 150px;
  }
  .foott{
    width: 100%;
    height: 20%;
  }
</style>
