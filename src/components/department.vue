<template>
  <div>
    <div id="boday">
      <nav class="nav main-nav" id="nav">
        <ul class="nav-lists layout clearfix">
          <li class="cur"><a @click="shouye">首页</a></li>
          <li><a>平台概况</a></li>
          <li><a @click="liucheng">患者服务</a></li>
          <li><a>新闻中心</a></li>
          <li><a>科室介绍</a></li>
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
          <a>科室介绍</a>
        </h2>
         </div>
       </div>
    </div>

    <div class="list" v-for="(index,item) in depart">
      <router-link :to="{name:'departmentInfo',query:{id:index.pk_depid}}">
      <!--<router-link :to="{name:'departmentInfo',query:{id:}}"></router-link>-->
      <div class="listone" >
        {{index.dep_name}}
      </div>
      <div class="listpic">
        <img :src="index.department_pic" width=100% height=100%>
      </div>
      </router-link>
      <div id="price">
        {{index.charge}}
      </div>
      <div id="yuan">
        元
      </div>
      <div id="pay">
        <el-button type="primary" plain>预约</el-button>
      </div>
    </div>

  </div>

</template>
<script>
  import axios from 'axios'
export default{
  data(){
      return{
//        list:[],
          depart:{
            dep_name:'',
            department_pic:'',
            pk_depid:'',
            department_type:'',
            charge:''
          }
      }
  },
  mounted(){
    axios.get("api/hospital-department/findall").then(res=>{
      this.depart=res.data
    })
  },
  methods: {
    liucheng:function () {
      this.$router.push("pic")
    },
    shouye: function () {
      this.$router.push("/")
    },
   }
}
</script>

  <style>
    #pay button{
      width: 110px;
      height: 40px;
      margin-top: 5px;
      /*background-color: goldenrod;*/
      float: left;
      font-size: 20px;
    }
    #yuan{
      width: 60px;
      height: 40px;
      margin-top: 5px;
      background-color: lightblue;
      float: left;
      font-size: 25px;
      color: #333333;
    }

    #price{
      width: 50px;
      height: 40px;
      margin-top: 5px;
      background-color: lightblue;
      text-indent:0.5em;
      font-size: 25px;
      float: left;
    }
    .listpic{
      width: 218px;
      height: 210px;

    }
    .listone{
      width: 218px;
      height: 35px;
      text-align:center;
    }
    .list{
      width: 220px;
      height: 250px;
      border:  2px solid rgba(32, 51, 58, 0.07);
      margin-top: 50px;
      margin-left: 40px;
      float:left;
    }
    .list:hover{
      position:relative;/*改成相对定位*/
      top:-5px;/*向上挪动5px*/
      box-shadow:0px 0px 5px 0px #c1b6bd;/*增加阴影效果*/
      transition:all 500ms/*动画过渡*/
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
    #department{
      width: 1200px;
      height: 400px;
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

