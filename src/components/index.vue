<template>
  <div>
    <div id="boday">
      <nav class="nav main-nav" id="nav">
        <ul class="nav-lists layout clearfix">
          <li class="cur"><a @click="shouye">首页</a></li>
          <li><a>平台概况</a></li>
          <li><a>患者服务</a></li>
          <li><a>新闻中心</a></li>
          <li><a>科室介绍</a></li>
          <li><a>医生介绍</a></li>
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
            <li><a href=""><i class="el-icon-alarm-clock"><ul class="fo">预约挂号</ul></i></a></li>
            <li><a href=""><i class="el-icon-document"><ul class="fo">就诊流程</ul></i></a></li>
            <li><a @click="zhineng"><i class="el-icon-mouse"><ul class="fo">智能导诊</ul></i></a></li>
            <li><a href=""><i class="el-icon-service"><ul class="fo">网上咨询</ul></i></a></li>
            <li><a href=""><i class="el-icon-postcard"><ul class="fo">医保专栏</ul></i></a></li>
            <li><a href=""><i class="el-icon-map-location"><ul class="fo">交通指南</ul></i></a></li>
          </ul>
      </div>
    </div>
  </div>
</template>


<script>
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
      }
    },
    methods:{
      zhineng:function () {
        this.$router.push("zhineng")
      },
      shouye:function () {
        this.$router.push("/")
      }
    }
  }



</script>

<style>
  #boday{
    width: 100%;
    height: 100%;
  }

  /*导航*/
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
    font-size: 33px;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .index-service#index-service li+li a {
    padding-left: 30px;
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
</style>

