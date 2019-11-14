<template>

  <div>
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
        <div class="second-nav-bg" style="background-image: url(http://static.409yy.com/images/default_bg.jpg);">
          <div class="bg layout">
            <h2>
              <a>医生介绍</a>
            </h2>
          </div>
        </div>
      </div>

      <div class="container list-expert-container">
        <div class="layout">
          <div class="filter-doc">
            <dl>
              <dt>所在科室：</dt>
              <dd>
                <ul class="tab-pannel">
                  <li >
                    <a class="cur" title="全部" ><span>全部</span></a>
                    <a title="急诊科门诊" ><span>急诊科门诊</span></a>
                    <a title="眼科门诊"><span>眼科门诊</span></a>
                    <a title="心血管内科门诊"><span>心血管内科门诊</span></a>
                    <a title="神经内科门诊"><span>神经内科门诊</span></a>
                    <a title="消化科门诊"><span>消化科门诊</span></a>
                    <a title="儿科门诊"><span>儿科门诊</span></a>
                    <a title="呼吸内科"><span>呼吸内科</span></a>
                    <a title="耳鼻咽喉科"><span>耳鼻咽喉科</span></a>
                    <a title="泌尿外科"><span>泌尿外科</span></a>
                    <a title="口腔科门诊"><span>口腔科门诊</span></a>
                    <a title="妇产科门诊"><span>妇产科门诊</span></a>
                    <a title="肾病内分泌科"><span>肾病内分泌科</span></a>
                    <a title="肿瘤内科"><span>肿瘤内科</span></a>
                  </li>
                </ul>
              </dd>
            </dl>
            <!--专家-->
            <dl>
              <dt>专家职称：</dt>
              <dd>
                <ul class="tab-pannel">
                  <li>
                    <a class="cur"><span>全部</span></a>
                    <a ><span>主任医师</span></a>
                    <a ><span>副主任医师</span></a>
                    <a ><span>主治医师</span></a>
                    <a ><span>医师</span></a>
                    <a ><span>主任药师</span></a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>

        <div class="expert-box">
          <div class="layout">
            <div class="expert-haschosen">
              <span>您已经选择：</span>
              <a href="js">全部</a>
              <div class="fr">
                共 <u> {{this.total}} </u> 医生
              </div>
            </div>
            <div class="doctor-list mt25">
              <div class="list-content">
                <ul class="expert-lists clearfix" v-for="ds in docters">
                  <!--医生信息-->
                  <li class="expert-info">
                    <a class="doc-img" href="#">
                      <router-link :to="{name:'docterinfo',query:{did:ds.did}}">
                      <div class="box">
                        <span class="imgbox">
                          <img :src="ds.doc_pic" />
                        </span>
                        <strong>{{ds.doc_name}}</strong>
                        <dl>
                          <dt>工作年龄：<u>{{ds.working_age}}</u>年</dt>
                        </dl>
                        <dl>
                          <dt>{{ds.zhicheng}}</dt>
                        </dl>
                        <dl>
                          <dt>{{ds.gender}}</dt>
                        </dl>
                      </div>

                      <p>
                        <small>科室：</small>
                        <u title="消化内科">{{ds.department}}</u>
                        <br/>
                        <small>专长：</small>
                        {{ds.specialty}}
                      </p>
                      </router-link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :page-size="this.params.size" v-on:current-change="changePage" :total="total" :current-page="this.params.page">
      </el-pagination>
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        // flag: -1,
        // tagList:[
        //   {name:"全部",id:1,},{name:"急诊科门诊",id:2,},{name:"眼科门诊",id:3,},{name:"心血管内科门诊",id:4,},
        //   {name:"神经内科门诊",id:5,},{name:"消化科门诊",id:6,},{name:"儿科门诊",id:7,},{name:"呼吸内科",id:8,},
        //   {name:"泌尿外科",id:9,},{name:"口腔科门诊",id:10,},{name:"妇产科门诊",id:11,},{name:"肾病内分泌科",id:12,},{name:"肿瘤内科",id:13,},
        // ],
        show: false,
        xhk:false,
        docters:[],
        total:this.total,
        params:{
          page:1,
          size:12
        },
      }
    },
    methods:{
      // choseprofrom:function (id) {
      //   this.flag = id;
      // },
      shouyea:function () {
        this.$router.push("/")
      },
      yisheng:function () {
        this.$router.push("docter")
      },
      changePage:function (e) {
        this.params.page=e
        this.query();
      },
      query:function () {
        var url="api/hospital-search/searchall/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.docters=res.data.list;
          console.log(this.docters)
          this.total=res.data.total;
        })
      },
    },
    mounted(){
      // axios.get("api/hospital-search/createBase").then(res=>{
      //   console.log(res.data)
      //   this.docters=res.data;
      // })
      // axios.get("api/hospital-search/addEs").then(res=>{
      //   console.log(res.data)
      //   this.docters=res.data;
      // })

      axios.get("api/hospital-search/searchall/"+this.params.page+"/"+this.params.size).then(res=>{
        this.docters=res.data.list;
        this.total=res.data.total;
      })
      // axios.get("api/hospital-search/searchdepat/").then(res=>{
      //   this.docters=res.data.list;
      //   this.total=res.data.total;
      // })

    }
  }

</script>


<style>

  #boday{
    width: 100%;
    height: 1600px;
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
  .list-expert-container {
    margin-top: 0;
  }
  .container {
    background-color: #fff;
  }
  .container {
    min-height: 500px;
    margin-top: 30px;
  }
  .layout {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  .filter-doc {
    padding: 10px 0;
    overflow: hidden;
  }
  .filter-doc dl {
    position: relative;
    font-size: 13px;
    min-height: 44px;
    box-sizing: border-box;
    padding: 12px 0;
  }
  .filter-doc dl dt {
    position: absolute;
    top: 13px;
    left: 0px;
    font-size: 14px;
    color: #999;
  }
  .filter-doc dl dd {
    margin-left: 100px;
    margin-right: -1%;
    overflow: hidden;
  }
  .filter-doc dl dd {
    margin-left: 100px;
    margin-right: -1%;
    overflow: hidden;
  }
  .filter-doc dl dd .tab-pannel {
    display: block;
    min-height: 52px;
  }
  .tab-pannel {
    display: none;
  }
  .filter-doc dl dd .tab-pannel li a {
    float: left;
    display: block;
    margin-right: 30px;
    margin-bottom: 10px;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
  }
  a {
    color: #555;
    outline: none;
  }
  .filter-doc dl dd .tab-pannel li a.cur {
    padding: 0 5px;
    border-radius: 5px;
    background-color: #35818f;
    color: #fff;
  }
  .filter-doc dl+dl {
    border-top: 1px dashed rgba(53,129,143,0.2);
  }
  .filter-doc dl {
    position: relative;
    font-size: 13px;
    min-height: 44px;
    box-sizing: border-box;
    padding: 12px 0;
  }
  .filter-doc dl dt {
    position: absolute;
    top: 13px;
    left: 0px;
    font-size: 14px;
    color: #999;
  }
  .filter-doc dl dd {
     margin-left: 100px;
     margin-right: -1%;
     overflow: hidden;
   }
  .filter-doc dl dd .tab-pannel {
    display: block;
    min-height: 52px;
  }
  .tab-pannel:first-child {
    display: block;
  }
  .tab-pannel {
    display: none;
  }
  .filter-doc dl dd .tab-pannel li:first-child {
    display: block;
  }
  .filter-doc dl dd .tab-pannel li {
    display: none;
    overflow: hidden;
  }
  li {
    list-style: none;
  }
  .filter-doc dl dd .tab-pannel li a.cur {
    padding: 0 5px;
    border-radius: 5px;
    background-color: #35818f;
    color: #fff;
  }
  .filter-doc dl dd .tab-pannel li a {
    float: left;
    display: block;
    margin-right: 30px;
    margin-bottom: 10px;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
  }
  a {
    color: #555;
    outline: none;
  }

  a, button {
    cursor: pointer;
  }
  /*显示搜索出来的*/
  .expert-box {
    padding-bottom: 30px;
    margin-bottom: -30px;
    background-color: #fff;
  }
  .expert-haschosen {
    position: relative;
    padding: 25px 0 5px;
    border-bottom: 1px solid rgba(53,129,143,0.2);
    overflow: hidden;
  }
  .expert-haschosen span {
    margin-right: 5px;
    color: #999;
  }
  .expert-haschosen a {
    padding: 0 10px;
    margin-right: 15px;
    line-height: 30px;
    border-radius: 5px;
    background-color: #35818f;
    color: #fff;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .expert-haschosen span, .expert-haschosen a {
    float: left;
    line-height: 32px;
    font-size: 16px;
  }
  .expert-haschosen .fr {
    line-height: 32px;
    font-size: 16px;
    color: #999;
  }
  .fr {
    float: right !important;
  }
  .expert-haschosen .fr u {
    color: #27616b;
    font-weight: bold;
  }

  .list-content {
    margin-top: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  .expert-lists {
    position: relative;
    margin: 30px 5px 0 -9px;
    /*border-bottom: 1px solid rgba(53,129,143,0.2);*/
  }
  .expert-lists .expert-info {
    position: relative;
    float: left;
    width: 290px;
    height: 270px;
    margin: 0 7px 34px;
  }
  li {
    list-style: none;
  }
  .expert-lists .expert-info a.doc-img {
    box-sizing: border-box;
    width: 290px;
    height: 100%;
    padding: 19px 19px 0;
    border: 1px solid rgba(53,129,143,0.2);
    background-color: #fff;
    transition: all .5s;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
  }
  .expert-lists .expert-info a.doc-img .box .imgbox {
    position: absolute;
    left: 0px;
    top: 0;
    width: 85px;
    height: 116px;
  }
  .expert-lists .expert-info a, .expert-lists .expert-info strong {
    display: block;
  }
  .list-expert-container .expert-lists .expert-info a.doc-img .box strong {
    margin-bottom: 0;
  }
  .doctor-list .list-content li:after {
    display: table;
    content: "";
    line-height: 0;
    font-size: 0;
    clear: both;
  }

  .list-content a {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .expert-lists .expert-info a.doc-img .box {
    position: relative;
    height: 136px;
    padding-left: 100px;
    border-bottom: 1px solid rgba(53,129,143,0.2);
  }
  .expert-lists .expert-info a.doc-img .box .imgbox img {
    display: block;
    width: 85px;
    height: 116px;
  }

  .expert-lists .expert-info a.doc-img .box dl {
    position: relative;
    height: 25px;
    line-height: 25px;
  }
  .expert-lists .expert-info a.doc-img .box dl dt {
    position: absolute;
    left: 0;
    top: 0;
    height: 25px;
    olor: #999;
    font-size: 13px;
  }
  .expert-lists .expert-info p {
    color: #999;
    font-size: 13px;
    margin-top: 9px;
  }
  p {
    margin: 0 0 9px;
  }
  .expert-lists .expert-info a.doc-img .box strong {
    margin-bottom: 10px;
    font-size: 18px;
    color: #27616b;
    text-align: left;
  }
  h1, h2, h3, h4, h5, h6, small {
    font-size: 100%;
  }
  .expert-lists .expert-info p small {
    font-weight: bold;
  }
  del, ins, u, s, a, a:hover {
    text-decoration: none;
    text-align: left;
  }
  /*.doc-img:hover{*/
    /*position:relative;!*改成相对定位*!*/
    /*top:-5px;!*向上挪动5px*!*/
    /*box-shadow:0px -3px 0px 0px #2dffc3;!*增加阴影效果*!*/
    /*transition:all 500ms!*动画过渡*!*/
  /*}*/

  .doc-img img:hover{
    cursor: pointer;
    transition: all 0.6s;
  }

  .doc-img img:hover{
    transform: scale(1.20);
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
  .el-pagination {
    margin-bottom: 2%;
  }
  .secectBackground{
    height: 80/75rem;
    padding-left: 67/75rem;
    padding-right: 67/75rem;
    border-radius: 4px;
    border: 2/75rem solid #C81623;
    margin-right: 20/75rem;
    margin-bottom: 20/75rem;
    color: #C81623;
    font-size: 36/75rem;
    align-items: center;
    display: flex;

  }
</style>
