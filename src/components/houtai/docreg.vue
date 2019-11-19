<template>
  <div>
    <div class="box1">
      <div class="ziti1">注册</div>
      <el-divider></el-divider>
      <div style=" font-size: 18px;color: lemonchiffon;float: left"><router-link to="/chatlogin">登录</router-link></div>
      <el-form style="width: 50%;margin: auto">
        <el-form-item label="用户名">
          <el-input v-model="docreg.docname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="docreg.docpass"></el-input>
        </el-form-item>
        <el-button class="el-icon-user"  style="font-size: 40px" @click="regdoc"><span style="font-size: 30px" >注册</span></el-button>
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
          docname:'',
          docpass:''
        }
      }
    },
    methods:{
      regdoc(){
          axios.post("api/docmsg/insertdocreg",this.docreg).then(res=>{
              this.$message.success(res.data);
              this.$router.push("/chatlogin")
          })
      }
    },
  }
</script>
