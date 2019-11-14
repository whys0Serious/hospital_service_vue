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
                <div class="userimg"><img :src="user.userPic" height="100%" width="100%"/></div>
                <div class="userimg_left">
                  <div style="float: right;width: 100%"><div style="margin-left: 30%"><span class="logsize">欢迎:</span><span class="logze">{{user.userName}} </span><span class="logsize"> 登陆平台</span></div></div>
                  <div class="info"><el-button type="danger">个人中心</el-button></div>
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
  <div id="header">
    <div class="header_title">
      <span class="title_con">健美医疗登录系统</span>
    </div>
  </div>
  <div id="content">
    <center>
      <div class="con">
        <div class="con_title">
          <span class="con_title_sp">欢迎登录健美医疗中心</span>
        </div>
        <el-form  status-icon :rules="rules" ref="ruleForm"  label-width="80px" :model="ruleForm" class="demo-ruleForm">
          <el-form-item label="用户名:" prop="name">
           <el-input class="con_input" v-model="ruleForm.name" placeholder="请输入邮箱/手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="pass">
            <el-input type="password" class="con_input" v-model="ruleForm.pass" placeholder="请输入密码"></el-input><router-link to=""><li class="el-icon-warning-outline" style="color:purple;">忘记密码？</li></router-link>
          </el-form-item>
            <el-radio v-model="ruleForm.role" label="用户">用户</el-radio>
            <el-radio v-model="ruleForm.role" label="医生" >医生</el-radio>
            <el-radio v-model="ruleForm.role" label="管理员">管理员</el-radio>
        <el-form-item style="margin-top: 10px;margin-left: -10px">
          <el-button @click="submitForm('ruleForm')" style="background-color:#6cb3ff;border: 0px;color: white">立即登录</el-button>
          <el-button style="background-color: #4be65d;color:white;border: 0px">扫码登陆</el-button>
          <el-button @click="forRegist()" style="background-color: #e6b73b;color:white;border: 0px">前往注册</el-button>
          </el-form-item>
        </el-form>
        </div>
    </center>

  </div>
  </div>
</template>
<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";

  import axios from 'axios'
  export default{
    components: {
      ElFormItem,
      ElButton},
    data(){
      //输入框判空
      var validatePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码！'));
        } else{
          callback();
      }
    };
      var validateName=(rule, value, callback)=>{
        if (!value) {
          return callback(new Error('用户名不能为空!'));
        } else{
          callback();
        }
      };
          return{
            users:{//发送到后台
              userMail:'',
              userPass:'',
              identity:''
            },
            ruleForm:{//表单绑定的数据
                name:'',
                pass:'',
                role:'用户'
            },
            labelPosition: 'right',
            rules:{//验证约束
              pass: [
                { validator: validatePass, trigger: 'blur' }
              ],
              name: [
                { validator: validateName, trigger: 'blur' }
              ],
            },
            flag:false,
            user:[],
          }
      },
    methods:{
      forRegist(){//跳转登录
          this.$router.push("/regist");
      },
      submitForm(formName){//提交登录信息
        console.log(this.$refs[formName])
        this.$refs[formName].validate((valid)=>{
          if(valid) {
            this.users.userPass = this.ruleForm.pass
            this.users.userMail= this.ruleForm.name
            this.users.identity = this.ruleForm.role
            axios.post("api/hospital-user-server/login",this.users).then(res=>{
                console.log(res.data)
                if(res.data==null||res.data==""){
                  this.$message.error("登录信息有误，请重试！");
                }else{
                    //验证成功将返回的信息存入cookie
                  var millisecond = new Date().getTime();
                  var expiresTime = new Date(millisecond + 60 *1000*30);//获取当前时间，加上过期30分钟
                      this.$cookie.set("userMsg",res.data,{
                        expires: expiresTime});
                  //返回首页
                  this.$message.success("欢迎登陆！");
                  this.$router.push("/")
                  this.$router.go(0);
                }
            })
          }
          return false;
        })
      }, loginOut(){
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
      if(id!=null){
          this.$router.push("/")
        this.$message.info("您已登陆！！")
      }
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
        this.user=res.data
      })
      if(this.user!=null&&this.user!=""){
        this.flag=true;
      }
    },


  }
</script>
<style>
  @import "static/css/login.css";

</style>
