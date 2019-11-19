<template>
  <div>
    <div class="box1">
      <div class="ziti1">登录</div>
      <el-divider></el-divider>
      <div style=" font-size: 18px;color: lemonchiffon;float: left"><router-link to="/docreg">注册</router-link></div>
      <el-form style="width: 50%;margin: auto">
        <el-form-item label="用户名">
          <el-input v-model="docreg.docname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password"  v-model="docreg.docpass"></el-input>
        </el-form-item>
        <el-button class="el-icon-info"  style="font-size: 40px" @click="culogin"><span style="font-size: 30px" >登陆</span></el-button>
      </el-form>
    </div>
  </div>
</template>
<style>
  .ziti1{
    text-align: center;
    color: #01AAED;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
  }
  .box1{
    margin: auto;
    background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3476609867,2277334519&fm=26&gp=0.jpg");
    width: 533px;
    height: 640px;
  }
</style>
<script>
  import axios from 'axios'
  export default{
    data(){
          return{
            docreg:{
              dconame:'',
              docpass:''
            }
          }
      },
    methods:{
      culogin(){
        axios.post("api/docmsg/logindoc",this.docreg).then(res=>{
          this.$message.success(res.data);
//          this.$router.push("/")查看预约
        })
      }
    }
  }
</script>
