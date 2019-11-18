
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
          <li class="cur"><a @click="shouye">首页</a></li>
          <li><a>平台概况</a></li>
          <li><a @click="liucheng">患者服务</a></li>
          <li><a>新闻中心</a></li>
          <li><a @click="keshi">科室介绍</a></li>
          <li><a>医生介绍</a></li>
          <li><a :to="{name:'docter'}">科室介绍</a></li>
          <li><a @click="yisheng">医生介绍</a></li>
          <li><a>科研教学</a></li>
          <li><a>党建园地</a></li>
          <li><a>健康咨询</a></li>
        </ul>
      </nav>
      <!--轮播图-->
      <div class="lbt" id="lbt">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in items" :key="item.index">
            <img style="height: 500px" :src="item.src"/>
            <!--<img style="height: 500px;width: 100%" src="../components/static/img/dalbt_2.jpg"/>-->
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--主体-->
      <div class="index-container">
        <ul class="index-service layout" id="index-service">
          <li><a href=""><i><img src="../components/static/img/naozhong.png">预约挂号</i></a></li>
          <li><a href=""><i><img src="../components/static/img/liucheng.png">就诊流程</i></a></li>
          <li><a @click="zhineng"><i><img src="../components/static/img/zhidao.png">智能导诊</i></a></li>
          <li><a href=""><i><img src="../components/static/img/zixun.png">网上咨询</i></a></li>
          <li><a href=""><i><img src="../components/static/img/yibao.png">医保专栏</i></a></li>
          <li><a href=""><i><img src="../components/static/img/jiaotong.png">交通指南</i></a></li>
        </ul>

        <div class="index-news layout clearfix">
          <a class="column-name-xinwen" href="">新闻中心</a>
          <ul class="tab-tit fr clearfix">
            <div class="tab-tit-container">
              <li class="index-news-tab-tit"><a href="">平台内新闻</a></li>
              <li class="index-news-tab-tit cur-tab"><a href="">健康科普</a></li>
              <li class="index-news-tab-tit"><a href="">视频新闻</a></li>
            </div>
          </ul>
          <div class="news-container">
            <div class="index-news-tab-con layout" style="display: block;">
              <div class="diff-news-box diff-news-box-slick slick-initialized slick-slider slick-dotted" role="toolbar">
                <div class="slick-list draggable" aria-live="polite">
                  <el-carousel height="380px" >
                    <el-carousel-item v-for="item in 4" :key="item">
                      <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
              <ul class="diff-news-box">
                <!--按li遍历新闻-->
                <li class="content-news-container">
                  <a class="content-news-information" href="">
                    <div class="news-date">
                      <p class="day">06</p>
                      <p class="ym">2019-10</p>
                    </div>
                    <div class="news-content-area">
                      <p>喜报丨西安医学院附属宝鸡医院荣膺“最具成长力中...</p>
                      <p class="text-indent">7月5日晚，由《中国医院院长》杂志主办的“第七届中国市县医院论坛”在河南郑州拉开帷幕、2019“星耀中华--最具成长力中国医院”评选结果在开幕典...</p>
                    </div>
                  </a>
                </li>

                <li class="content-news-container">
                  <a class="content-news-information" href="">
                    <div class="news-date">
                      <p class="day">06</p>
                      <p class="ym">2019-10</p>
                    </div>
                    <div class="news-content-area">
                      <p>喜报丨西安医学院附属宝鸡医院荣膺“最具成长力中...</p>
                      <p class="text-indent">7月5日晚，由《中国医院院长》杂志主办的“第七届中国市县医院论坛”在河南郑州拉开帷幕、2019“星耀中华--最具成长力中国医院”评选结果在开幕典...</p>
                    </div>
                  </a>
                </li>

                <li class="content-news-container">
                  <a class="content-news-information" href="">
                    <div class="news-date">
                      <p class="day">06</p>
                      <p class="ym">2019-10</p>
                    </div>
                    <div class="news-content-area">
                      <p>喜报丨西安医学院附属宝鸡医院荣膺“最具成长力中...</p>
                      <p class="text-indent">7月5日晚，由《中国医院院长》杂志主办的“第七届中国市县医院论坛”在河南郑州拉开帷幕、2019“星耀中华--最具成长力中国医院”评选结果在开幕典...</p>
                    </div>
                  </a>
                </li>

                <li class="content-news-container">
                  <a class="content-news-information" href="">
                    <div class="news-date">
                      <p class="day">06</p>
                      <p class="ym">2019-10</p>
                    </div>
                    <div class="news-content-area">
                      <p>喜报丨西安医学院附属宝鸡医院荣膺“最具成长力中...</p>
                      <p class="text-indent">7月5日晚，由《中国医院院长》杂志主办的“第七届中国市县医院论坛”在河南郑州拉开帷幕、2019“星耀中华--最具成长力中国医院”评选结果在开幕典...</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!--健康科普-->
            <div class="index-news-tab-con layout" style="display: none;"></div>
            <!--视频新闻-->
            <div class="index-news-tab-con layout" style="display: none;"></div>
          </div>
        </div>

        <!--通知公告-->
        <div class="al-container" style="background-image: url('http://static.409yy.com/images/u1.png');">
          <div class="layout">
            <div class="index-announcement fl clearfix">
              <a class="column-name" href="">通知公告</a>
              <ul class="tab-tit fr clearfix">
                <div class="tab-tit-container">
                  <li class="cur-tab index-announcement-tab-tit">
                    <a href="#">平台公告</a>
                  </li>
                  <li class="index-announcement-tab-tit">
                    <a href="http://www.409yy.com/news_job/">招聘公告</a>
                  </li>
                  <li class="index-announcement-tab-tit">
                    <a href="http://www.409yy.com/news_tender/">招标信息</a>
                  </li>
                </div>
              </ul>
              <!--通知详情-->
              <div class="news-container">
                <div class="index-announcement-tab-con" style="display: block;">
                  <ul class="diff-news-box">
                    <li class="content-news-container">
                      <a class="content-news-information" href="http://www.409yy.com/news_announcement/2019/K9b6YLaE.html">
                        <span class="content-news-title">&nbsp;&nbsp;患者就诊温馨提示</span>
                        <span class="m-day fr clearfix">04-23</span>
                      </a>
                    </li>
                    <li class="content-news-container">
                      <a class="content-news-information" href="http://www.409yy.com/news_announcement/2019/APdRKVeG.html">
                        <span class="content-news-title">&nbsp;&nbsp;西安医学院2019年高考招生章程</span>
                        <span class="m-day fr clearfix">06-14</span>
                      </a>
                    </li>
                    <li class="content-news-container">
                      <a class="content-news-information" href="http://www.409yy.com/news_announcement/2019/MYerBLeO.html">
                        <span class="content-news-title">&nbsp;&nbsp;西安医学院附属宝鸡医院成人高等学历教育招生简章</span>
                        <span class="m-day fr clearfix">05-06</span>
                      </a>
                    </li>
                    <li class="content-news-container">
                      <a class="content-news-information" href="http://www.409yy.com/news_announcement/2019/5xe7W8e7.html">
                        <span class="content-news-title">&nbsp;&nbsp;医院PPT模板</span>
                        <span class="m-day fr clearfix">04-24</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--科室介绍-->
        <div class="home-dm-box" style="background-image: url('http://static.409yy.com/images/department_bg.jpg');">
          <div class="layout list-item home-departments">
            <a class="column-name-keshi" href="">科室介绍</a>
            <div class="list-content mt25">
              <div class="department-content clearfix">
                <div class="department-active" id="department_active">
                  <div class="dm-img" id="dm_img" style="background-image: url(http://upload.409yy.com/2019/0422/thumb_300_220_20190422114714200.jpg);"></div>
                  <a href="http://www.409yy.com/departments_pfmrka0_ksjj/" id="dm_title" class="dm-title">皮肤美容科</a>
                  <span id="dm_key" class="dm-key"></span>
                </div>
                <div class="department-panel layout" id="department_panel">
                  <div class="dm-panel-item">
                    <div class="dm-detail clearfix">
                      <div v-for="dep in depatment">
                          <router-link :to="{name:'departmentInfo',query:{id:dep.pkDepid}}">
                          {{dep.depName}}
                          </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--医生介绍-->
        <div class="index-experts-box">
          <div class="layout">
            <div class="look-experts" >
              <a class="column-name-yisheng">医生介绍</a>
              <a href="http://localhost:1100/#/docter">
                <img src="../components/static/img/sousuo.png" height="25" width="25" style="position: relative;left: 40%"/>
                <span style="position: relative;top: -20%;left: 40%">搜索医生</span>
              </a>
            </div>
            <!--展示医生小卡片-->
            <div class="card" >
              <a href="" style="text-align: center">
                <div class="card_dange" v-for="doct in docters">
                  <router-link :to="{name:'docterinfo',query:{did:doct.did}}">
                  <span><img :src="doct.doc_pic" width="210" height="290"></span>
                  <div class="doc clearfix">
                    <strong>{{doct.doc_name}}</strong>
                    <u>{{doct.zhicheng}}</u>
                  </div>
                  <div class="doc-dm">
                    <a>{{doct.department}}</a>
                  </div>
                  </router-link>
                </div>
              </a>

            </div>
            <el-pagination background layout="prev, pager, next" :page-size="this.params.size" v-on:current-change="changePage" :total="total" :current-page="this.params.page">
            </el-pagination>
          </div>
        </div>


      </div>
      <div class="foot">
        <img src="../components/static/img/微信截图_20191111210359.png" height="360" width="100%"/>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        items:[
          {src:'http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3ItQ2AViJ5AAG27nlip7Y13..jpg'},
          {src:'http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3ItZqAAoDhAAGcEU6POsI45..jpg'},
          {src:'http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3ItcyAWlGCAAfEd3N2lQc39..jpg'},
          {src:'http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3ItfuAMUAzAAJ3qeBHdqA31..jpg'},
          {src:'http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3IuIqAI0KMAAQZ3KOA6FE86..jpg'},
        ],
        total:this.total,
        params:{
          page:1,
          size:12
        },
        state:'',
        flag:false,
        user:[],
        depatment:[],
        docters:[]
      }
    },

    methods:{
      changePage:function (e) {
        this.params.page=e
        this.query();
      },
      query(){
        axios.get("api/hospital-indexshow/searchall?page="+this.params.page).then(res=>{
          console.log(res.data)
          this.docters=res.data.list;
          this.total=res.data.total;
        })
      },
      handleSelect(){

      },
      keshi:function () {
        this.$router.push("department")
      },
      zhineng:function () {
        this.$router.push("zhineng")
      },
      shouye:function () {
        this.$router.push("/")
      },
      yisheng:function () {
        this.$router.push("docter")
      },
      liucheng:function () {
        this.$router.push("pic")
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
      axios.get("api/hospital-indexshow/showdepart").then(res=>{
        console.log(res.data)
        this.depatment=res.data;
      })

      this.query();

    },
  }



</script>

<style >
  #boday{
    width: 100%;
    height: 100%;
  }

  /*导航*/
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
  /*轮播图*/
  .lbt{
    width: 100%;
    height: 500px;
    /*float: left;*/
    /*overflow: hidden;*/
  }
  /*整体*/
  .index-container{
    width: 100%;
    position: relative;
    top: -50px;
    margin-bottom: -90px;
    /*background-color: #5daf34;*/
    z-index:9999;
  }
  /*轮播图导航*/
  .index-service#index-service {
    display: flex;
    justify-content: center;
    height: 93px;
    background-color: #fff;
    border-radius: 50px;
    padding: 0 45px;
    box-sizing: border-box;
    -moz-box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    -webkit-box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  }
  .index-service#index-service li {
    float: left;
    padding-top: 25px;
  }
  li {
    list-style: none;
  }
  .index-service#index-service li a u {
    position: relative;
    top: -4px;
    margin-left: 20px;
    font-size: 30px;
    color: #333;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .index-service#index-service li a {
    display: inline-block;
    height: 50px;
  }
  a {
    color: #555;
    outline: none;
  }
  del, ins, u, s, a, a:hover {
    text-decoration: none;
  }
  a, button {
    cursor: pointer;
  }
  .index-service#index-service li a:hover u{
    color: #27616b;
  }
  .fo {
    position: relative;
    top: -25px;
    margin-left: 20px;
    font-size: 20px;
    color: #333;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    width: 150px;
  }
  .index-service#index-service li a i {
    color: #35818f;
    font-style: normal;
    font-size: 24px;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .index-service#index-service li a i img{
    width: 30px;
    height: 30px;
    position: relative;
    top: 5px;
    left: -7px;
  }
  .index-service#index-service li a{
    padding: 0 20px;
  }
  .index-service#index-service li+li a {
    border-left: 1px solid #ddd;
  }
  .el-icon-alarm-clock:before {
    content: "\E703";
    margin-right: 110px;
  }
  .el-icon-document:before{
    margin-right:110px;
  }
  .el-icon-mouse:before{
    margin-right:110px;
  }
  .el-icon-service:before{
    margin-right:110px;
  }
  .el-icon-postcard:before{
    margin-right:110px;
  }
  .el-icon-map-location:before{
    margin-right:110px;
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
  .index-news {
    margin-top: 40px;
    height: 444px;
    overflow: hidden;
  }
  .layout {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  a {
    color: #555;
    outline: none;
  }
  .tab-tit {
    display: inline-block;
    text-align: center;
  }
  .fr {
    float: right !important;
  }
  .tab-tit .tab-tit-container li {
    float: left;
    font-size: 16px;
    margin: 0;
  }
  .tab-tit .tab-tit-container li+li {
    margin-left: 30px;
  }
  .tab-tit .tab-tit-container li {
    float: left;
    font-size: 16px;
    margin: 0;
  }
  .cur-tab {
    position: relative;
  }
  .column-name {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 32px;
    color: #27616b;
    line-height: 32px;
    position: relative;
    left: -33%;
  }
  .column-name-xinwen{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 32px;
    color: #27616b;
    line-height: 32px;
    position: relative;
    left: -33%;
  }
  .column-name-keshi{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 32px;
    color: #27616b;
    line-height: 32px;
    position: relative;
    left: -45%;
  }

  .index-news .news-container {
    position: relative;
  }
  .news-container {
    margin-top: 30px;
  }
  .index-news .news-container .index-news-tab-con {
    position: absolute;
    left: 0;
    top: 0;
  }
  /*新闻界面的轮播图*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .index-news .diff-news-box{
    float: left;
    width: 45%;
    height: 380px;
    overflow: hidden;
  }
  .index-news .diff-news-box+.diff-news-box {
    margin-left: 55px;
    width: 571px;
  }
  .index-news .diff-news-box {
    float: left;
    width: 574px;
    height: 380px;
    overflow: hidden;
  }
  .index-news .content-news-container {
    position: relative;
    width: 100%;
    height: 65px;
    overflow: hidden;
  }
  li {
    list-style: none;
  }
  .news-date {
    position: absolute;
    left: 0;
    top: 0;
    width: 65px;
    height: 65px;
    display: inline-block;
    margin: 0;
    vertical-align: middle;
    background-color: #fff;
    padding-right: 15px;
    border-right: 1px solid rgba(54,130,144,0.2);
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .index-news .content-news-container .news-content-area {
    width: 470px;
    height: 65px;
  }
  .content-news-container .news-content-area {
    position: absolute;
    right: 0;
    top: 0;
    text-align: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .news-date .day {
    width: 100%;
    height: 28px;
    line-height: 28px;
    margin: 8px 0 0;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: rgba(54,130,144,0.5);
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  p {
    margin: 0 0 9px;
  }
  .news-date .ym {
    width: 100%;
    color: #666;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .content-news-container .news-content-area p:first-of-type {
    height: 16px;
    line-height: 16px;
    white-space: nowrap;
    font-size: 16px;
    color: #000;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .content-news-container .news-content-area p:last-of-type {
    height: 40px;
    line-height: 20px;
    color: #aeaeae;
  }
  .text-indent {
    text-indent: 2em;
  }
  .index-news .content-news-container+.content-news-container {
    margin-top: 35px;
  }
  .index-news .content-news-container {
    position: relative;
    width: 100%;
    height: 65px;
    overflow: hidden;
  }
  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
    font-size: 0;
    clear: both;
  }
  .cur-tab:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 65px;
    height: 2px;
    background: inherit;
    background-color: #febd00;
  }
  .al-container {
    background-repeat: no-repeat;
    background-size: cover;
    height: 305px;
    margin-top: 40px;
  }
  .al-container .index-announcement {
    width: 618px;
    height: 195px;
    margin-top: 55px;
    padding-right: 50px;
    border-right: 1px solid #ccc;
  }
  .al-container .index-links {
    height: 100%;
  }
  .fr {
    float: right !important;
  }
  .column-name {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 32px;
    color: #27616b;
    line-height: 32px;
  }
  .tab-tit {
    display: inline-block;
    text-align: center;
  }
  .al-container .index-announcement .news-container {
    height: 125px;
  }
  .news-container {
    margin-top: 30px;
  }
  .fl {
    float: left !important;
  }
  .column-name {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 32px;
    color: #27616b;
    line-height: 32px;
    margin-left: 28%;
  }
  .tab-tit {
    display: inline-block;
    text-align: center;
  }
  .tab-tit .tab-tit-container {
    display: inline-block;
  }
  .tab-tit .tab-tit-container li {
    float: left;
    font-size: 16px;
    margin: 0;
  }
  .cur-tab {
    position: relative;
  }
  li {
    list-style: none;
  }
  .tab-tit .tab-tit-container li+li {
    margin-left: 30px;
  }
  .tab-tit .tab-tit-container li {
    float: left;
    font-size: 16px;
    margin: 0;
  }
  .al-container::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.9);
  }
  .al-container .index-announcement .news-container {
    height: 125px;
  }
  .news-container {
    margin-top: 30px;
  }
  .al-container .index-announcement .news-container .index-announcement-tab-con {
    display: none;
  }
  .al-container .index-announcement .news-container .content-news-information {
    display: block;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
  }
  .content-news-container .content-news-information {
    display: block;
    width: 100%;
    height: 100%;
  }
  a {
    color: #555;
    outline: none;
  }
  .al-container .index-announcement .news-container .content-news-title {
    width: 443px;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .al-container .index-announcement .news-container .m-day {
    font-size: 14px;
    color: #333;
  }
  .al-container .index-announcement .news-container .content-news-title::before {
    content: " ";
    display: inline-block;
    position: relative;
    top: -4px;
    width: 12px;
    height: 2px;
    background-color: #febd00;
  }
  .content-news-container{
    text-align: left;
    margin-top: 3%;
  }
  .home-dm-box {
    position: relative;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .home-dm-box::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #add8e6;
    opacity: .3;
  }
  .home-dm-box .home-departments {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 40px 0 0;
  }
  .list-item {
    box-sizing: border-box;
  }
  .home-dm-box .home-departments .department-content {
    margin-top: 25px;
    height: 280px;
    position: relative;
    box-sizing: border-box;
  }
  .home-dm-box .home-departments .department-content .department-active {
    width: 300px;
    height: 280px;
    box-sizing: border-box;
    position: absolute;
  }
  .home-dm-box .home-departments .department-content .department-panel {
    height: 280px;
    width: 900px;
    margin-left: 300px;
    position: relative;
  }
  .home-dm-box .home-departments .department-content .department-active .dm-img {
    width: 300px;
    height: 220px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .home-dm-box .home-departments .department-content .department-active .dm-title {
    background-color: #35818f;
    display: block;
    color: #fff;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 16px;
    transition: all .28s;
  }
  .home-dm-box .home-departments .department-content .department-active .dm-key {
    position: absolute;
    right: 20px;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    color: #d1ebf7;
    font-size: 12px;
  }
  .home-dm-box .home-departments .department-content .department-active .dm-key {
    position: absolute;
    right: 20px;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    color: #d1ebf7;
    font-size: 12px;
  }
  .home-dm-box .home-departments .department-content .department-panel .dm-panel-item .dm-detail a:before {
    content: '·';
    display: inline;
    padding-left: 15px;
    padding-right: 5px;
    font-size: 15px;
    color: #35818f;
    font-weight: bold;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .home-dm-box .home-departments .department-content .department-panel .dm-panel-item .dm-detail a.active {
    color: #fff;
    background-color: #35818f;
  }
  .home-dm-box .home-departments .department-content .department-panel .dm-panel-item .dm-detail a {
    float: left;
    box-sizing: border-box;
    height: 40px;
    width: 160px;
    color: #35818f;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    line-height: 40px;
    box-sizing: border-box;
    border: 1px solid rgba(53,129,143,0.5);
    margin-left: 20px;
    margin-top: 20px;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .index-experts-box {
    min-width: 1200px;
    height: 650px;
    overflow: hidden;
  }
  .look-experts {
    position: relative;
    height: 30px;
    margin-top: 40px;
    text-align: center;
  }
  .column-name-yisheng {
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-size: 32px;
    color: #27616b;
    line-height: 32px;
    position: relative;
    left: -41%;
  }
  .card{
    width: 100%;
    height: 450px;
    margin-top: 2%;
    /*background-color: #dd6161;*/
  }
  .card_dange{
    float: left;
    width: 23%;
    height: 450px;
    /*background-color: #8cc5ff;*/
    margin-right: 2%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
    background-color: #fff;
    border: 1px solid rgba(53,129,143,0.5);
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }

  .card_dange:hover{
    -webkit-box-shadow: 0px 0px 5px #27616b;
    box-shadow: 0px 0px 5px #27616b;
  }
  .doc{
    margin: 5px 0;
    line-height: 28px;
  }
  .doc strong {
    font-size: 20px;
    margin-top: 20px;
  }
  .doc strong u {
    display: block;
    text-align: center;
  }
  .doc strong u {
    color: #999;
    font-size: 16px;
    height: 32px;
    line-height: 32px;
  }

  .card_dange .doc-dm {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    margin-top: 10px;
    padding: 0 10px;
    border-top: 1px solid rgba(53,129,143,0.5);
    font-size: 18px;
    text-align: center;
    line-height: 60px;
    color: #35818f;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .card_dange .doc-dm a {
    display: inline-block;
    color: #35818f;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }

</style>

