<template>
  <div>
    <div id="boday">
      <nav class="nav main-nav" id="nav">
        <ul class="nav-lists layout clearfix">
          <li class="cur"><a @click="shouye">首页</a></li>
          <li><a>平台概况</a></li>
          <li><a @click="liucheng">患者服务</a></li>
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
            <a>科室详情</a>
          </h2>
        </div>
      </div>
    </div>
<div id="tu">
  <img src="../components/static/img/1.jpg" style="margin: 0 auto;">
</div>
    <div id="show" >
{{departinfo.department_type}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
         departinfo:{
         }
      }
    },
    methods: {
      liucheng:function () {
        this.$router.push("pic")
      },
      shouye: function () {
        this.$router.push("/")
      },
      keshi:function () {
        this.$router.push("department")
      }
    },
    mounted(){
        var id=this.$route.query.id
        //查看科室详情
        axios.get("api/hospital-department/findById/"+id).then(res=>{
          this.departinfo=res.data;
        })
    }


  }
</script>
<style>
  #show{
    width: 100%;
    height: 800px;
    margin-top: 350px;
    font-size:25px ;
    color: #2c3e50;
    text-indent: 2em;
    text-align:left;
  }
  #tu{
    width: auto;
    height: 500px;
    margin-top: 50px;
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
</style>
