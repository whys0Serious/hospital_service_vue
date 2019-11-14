<template>
  <div id="app">
    <div id="whole">
      <div id="shoulan">
        <div id="juzhong">
          <div id="logo"><img src="../src/components/static/img/logo.jpg" height="100%" width="100%" /></div>
          <div class="search">
            <el-autocomplete style="width: 70%;height: 100%" v-model="state" placeholder="请输入内容" @keydown.enter="handleSelect" ></el-autocomplete>
            <el-button icon="el-icon-search" type="success" size="smile" circle @click="handleSelect"></el-button><br/>
            <!--<div id="src"> <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/32aac580.png"/></div>-->
            <span class="seafont">热门搜索：</span>
            <span class="seafdata">感冒</span>
          </div>
          <!--登陆-->
          <div class="userinfo">
            <div v-if="flag!=false">
              <div class="userimg"><img src="../src/components/static/img/userlogo.jpg" height="100%" width="100%"/></div>
              <div class="userimg_left">
                <div style="float: right;width: 100%"><div style="margin-left: 40%"><span class="logsize">欢迎 ,</span><span class="logze">张小米 </span><span class="logsize"> 登陆平台</span></div></div>
                <div class="info"><el-button type="danger">个人中心</el-button></div>
                <div class="info"><el-button type="warning">我的收藏</el-button></div>
              </div>
            </div>
            <div v-if="flag==false">
              <div class="info1"><el-button type="warning">注册</el-button></div>
              <div class="info1"><el-button type="success">登陆</el-button></div>
              <div class="info1">请游客您，</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        state:'',
      flag:false

      }
    },
  methods:{
    handleSelect(){

    }
  }

}
</script>

<style >
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
