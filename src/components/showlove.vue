<template>
  <div id="body">
    <!--展示医生小卡片-->
    <div class="card" >
      <a href="" style="text-align: center">
        <div class="card_dange" v-for="doct in docters">
          <router-link :to="{name:'docterinfo',query:{did:doct.pkDocid}}">
            <span><img :src="doct.docPic" width="210" height="290"></span>
            <div class="doc clearfix">
              <strong>{{doct.docName}}</strong>
              <u>{{doct.zhicheng}}</u>
            </div>
            <div class="doc-dm">
              <a>{{doct.department}}</a>
            </div>
          </router-link>
        </div>
      </a>
    </div>
    <!--<el-pagination background layout="prev, pager, next" :page-size="this.params.size" v-on:current-change="changePage" :total="total" :current-page="this.params.page">-->
    <!--</el-pagination>-->


  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        total:12,
        state:'',
        docters:[],
        params:{
          page:1,
          size:4
        },
      }
    },
    methods:{
      handleSelect(){

      },
      changePage:function (e) {
        this.params.page=e
        this.query();
      },
    },
    mounted(){
      var id= this.$cookie.get("userMsg")
      axios.get("api/hospital-indexshow/searchlove?userid="+id).then(res=>{
        this.docters=res.data;
        this.total=res.data.total;
      })
    }
  }

</script>

<style>
#body{
  width: 100%;
  height: 900px;
  /*background-color: #8cc5ff;*/
}
.card {
  width: 100%;
  height: 500px;
  margin-top: 2%;
  /* background-color: #dd6161; */
}
.fen{
  width: 100%;
  height: 100px;
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
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  text-align: center;
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
