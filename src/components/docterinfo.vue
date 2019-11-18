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
    </div>
    <div id="boday">
      <nav class="nav main-nav" id="nav">
        <ul class="nav-lists layout clearfix">
          <li class="cur"><a @click="shouyea">首页</a></li>
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
        <div class="second-nav-bg" style="background-image: url(http://static.409yy.com/images/default_bg.jpg);"></div>
        <div class="show-doc-container font-default">
          <div class="container-inner mt25">
            <div class="doctor-details clearfix">
              <div class="f">
                <div class="layout">
                  <div class="doctor-resume">
                    <div class="doc-info">
                      <p class="doc-name">{{docters.doc_name}}</p>
                      <p class="doc-protit">{{docters.zhicheng}}</p>
                      <p class="doc-dp">
                        <span>所在科室：</span>
                        <a href="">{{docters.department}}
                        </a>
                      </p>
                      <div class="caozuo">
                        <img src="../components/static/img/shoucang.png" height="30" width="30"/>
                      </div>
                    </div>
                    <div class="doc-resume">
                      <div class="doctor-img">
                        <img :src="docters.doc_pic"/>
                      </div>
                      <span class="produce-title">个人简介</span>
                      <div class="content-padding-top"></div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{docters.specialty}}
                    </div>
                  </div>
                  <div class="other-info">
                    <p>
                      <span>专家专长：</span>
                      {{docters.specialty}}
                    </p>
                  </div>
                  <router-link :to="{name:'guahao',query:{id:docters.did}}"></router-link>
                </div>
                <div class="clinic-and-news">
                  <div class="layout"></div>
                </div>
                <div class="layout">
                  <div class="same-depart-doc">
                    <div>
                      <p class="produce-title">同科室医生</p>
                      <a class="fr more" href="">
                        MORE<img src="../components/static/img/加号.png" style="width: 15px;height: 15px"/>
                      </a>
                    </div>
                    <div class="hover-shadow">
                      <div class="list-content">
                        <div class="dm-experts-boxer slider clearfix">
                          <!--遍历同科室的医师-->
                          <div class="expert-info" v-for="d in doc">
                            <a class="doc-img" @click="query(d.did)" >
                              <!--<router-link :to="{name:'docterinfo',query:{did:d.did}}"></router-link>-->
                              <div>
                                <img :src="d.doc_pic"/>
                              </div>
                              <strong>{{d.doc_name}}</strong>
                              <p>
                                <u>{{d.zhicheng}}</u>
                              </p>
                              <!--</router-link>-->
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        docters: {
          doc_name: '', department: '', zhicheng: '', doc_pic: '',specialty: '',did:''
        },
        doc:[],
        flag:false,
        user:[],
      }
    },
    methods:{
      shouyea:function () {
        this.$router.push("/")
      },
      yisheng:function () {
        this.$router.push("docter")
      },
      query(id){
        //根据查询医生详情
        axios.post("api/hospital-search/findDocterInfo",{did:id}).then(res=>{
          this.docters=res.data;
        })
        //根据该用户查询同科室医生查询课程详情
        axios.get("api/hospital-search/findDocterNotDepatment/"+id).then(res=>{
          this.doc=res.data;
          console.log(this.doc)
        })
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
      this.query(this.$route.query.did);

      var id= this.$cookie.get("userMsg")
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
        this.user=res.data
        this.flag=true;
      })
      if(this.user!=null&&this.user!=""){
        this.flag=false;
      }
    }
  }
</script>

<style >

  #boday {
    width: 100%;
    height: 900px;
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
  .show-doc-container {
    margin-top: -190px;
    text-align: left;
  }
  .mt25 {
    margin-top: 25px;
  }
  .container-inner {
    background-color: #fff;
    min-height: 460px;
  }
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
    font-size: 0;
    clear: both;
  }
  .layout {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .same-depart-doc {
    margin-top: 30px;
  }
  .clinic-and-news {
    padding-top: 20px;
    padding-bottom: 40px;
    margin-top: 20px;
    background-color: rgba(204,204,204,0.1);
    border-top: 1px solid rgba(121,121,121,0.15);
  }
  .doctor-resume {
    position: relative;
    min-height: 322px;
    margin-bottom: 30px;
  }
  .doctor-resume .doc-info {
    position: absolute;
    right: 0;
    top: 0;
    width: 920px;
    color: #fff;
  }
  .doctor-resume .doc-info .doc-name {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 48px;
  }
  .doctor-resume .doc-info .doc-protit {
    font-size: 20px;
    margin-top: -4px;
  }
  p {
    margin: 0 0 9px;
  }
  .doctor-resume .doc-info .doc-dp {
    font-weight: 400;
    font-size: 20px;
    margin-top: -10px;
  }
  p {
    margin: 0 0 9px;
  }
  .doctor-resume .doc-info .doc-dp {
    font-weight: 400;
    font-size: 20px;
    margin-top:-2px;
  }
  .doctor-resume .doc-info .doc-dp a {
    color: #fff;
  }
  a {
    color: #555;
    outline: none;
  }
  del, ins, u, s, a, a:hover {
    text-decoration: none;
  }
  .doctor-resume .doc-resume {
    font-size: 16px;
    line-height: 28px;
    color: #333;
  }
  .doctor-resume div.doctor-img {
    box-sizing: border-box;
    border: 5px solid #fff;
  }
  .doctor-resume .doctor-img {
    float: left;
    width: 236px;
    height: 322px;
    margin-right: 45px;
  }
  .doctor-resume div.doctor-img img {
    width: 226px;
    height: 312px;
  }
  .doctor-resume .doc-resume span {
    display: inline-block;
    width: 910px;
    margin-top: 185px;
    margin-bottom: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    padding-bottom: 15px;
    border-bottom: 1px dashed rgba(53,129,143,0.2);
  }
  .produce-title {
    display: inline-block;
    font-family: '微软雅黑';
    color: #27616b;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  a.fr.more {
    font-size: 14px !important;
  }
  .fr {
    float: right !important;
  }
  .doctor-resume .doc-resume .content-padding-top {
    height: 15px;
  }
  .doctor-details .f .other-info {
    font-size: 16px;
    line-height: 28px;
  }
  .doctor-details .f .other-info p {
    margin: 0;
    font-weight: 700;
  }
  p {
    margin: 0 0 9px;
  }
  .clinic-and-news {
    padding-top: 20px;
    padding-bottom: 40px;
    margin-top: 20px;
    background-color: rgba(204,204,204,0.1);
    border-top: 1px solid rgba(121,121,121,0.15);
  }
  .same-depart-doc .produce-title {
    margin-bottom: 0;
  }
  .hover-shadow {
    padding: 10px;
    margin: -10px;
    overflow: hidden;
  }
  .list-content {
    margin-top: 20px;
    position: relative;
  }
  .same-depart-doc .dm-experts-boxer {
    margin: 0 -12px 0;
  }
  .dm-experts-boxer {
    position: relative;
    margin: 30px -12px 0;
  }
  .dm-experts-boxer .expert-info {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 180px;
    height: 284px;
    padding: 20px 20px 0;
    margin: 0 12px 0;
    background-color: #fff;
    border: 1px solid rgba(53,129,143,0.2);
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    -moz-box-shadow: 0px 5px 1px -2px rgba(0,0,0,0.08);
    -webkit-box-shadow: 0px 5px 1px -2px rgba(0,0,0,0.08);
    box-shadow: 0px 5px 1px -2px rgba(0,0,0,0.08);
  }
  .dm-experts-boxer .expert-info a, .dm-experts-boxer .expert-info strong {
    display: block;
    text-align: center;
  }

  .dm-experts-boxer .expert-info a.doc-img>div img {
    display: block;
    width: 140px;
    height: 191px;
    margin: auto;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }

  .dm-experts-boxer .expert-info a.doc-img>div {
    width: 140px;
    height: 191px;
    overflow: hidden;
  }
  .dm-experts-boxer .expert-info a.doc-img strong {
    margin-top: 8px;
    color: #555;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
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

  .caozuo{
    /*background-color: aquamarine;*/
    width: 15%;
    height: 30px;

  }
</style>
