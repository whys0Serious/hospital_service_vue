<template>
  <div style="margin-top: 1%">
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
                  <div v-if="(user.identity)==('用户')">
                    <div class="info"><el-button type="danger"><router-link to="/userContainer">个人中心</router-link></el-button></div>
                  </div>
                  <div v-if="(user.identity)==('医生')">
                    <div class="info"><el-button type="danger"><router-link to="/docterback">就诊平台</router-link></el-button></div>
                  </div>
                  <div v-if="(user.identity)==('管理员')">
                    <div class="info"><el-button type="danger"><router-link to="/">后台管理</router-link></el-button></div>
                  </div>
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
    <div class="wrapper">
      <article>
        <h1><span>健美医院注册中心</span></h1>
        <div class="main">
          <el-form :model="ruleForms" status-icon :rules="rules" ref="ruleForms" label-width="100px" class="demo-ruleForm">
            <el-form-item class="tel"  prop="username">
              <el-input v-model="ruleForms.username" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item class="tel"  prop="userpass">
              <el-input type="password" placeholder="请输入密码" v-model="ruleForms.userpass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  prop="checkPass">
              <el-input type="password" placeholder="确认密码" v-model="ruleForms.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="tel" prop="usermail">
              <el-input v-model="ruleForms.usermail"  placeholder="请输入有效邮箱地址"></el-input>
            </el-form-item>
            <el-form-item class="tel"  prop="userphone">
              <el-input v-model="ruleForms.userphone" type="number"  placeholder="请输入有效手机号码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="background-color: red;border: 0px" @click="submitForm('ruleForms')">提交注册</el-button>
            </el-form-item>
            <el-form-item>
              <router-link to="/docRegist" ><el-button type="primary" style="background-color: #92b8d6;border: 0px;">医师注册</el-button></router-link>
            </el-form-item>
          </el-form>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default{
      data(){
        var checkName = (rule, value, callback) => {
             var reg = /^[\u4e00-\u9fa5]*$/;
          if (!value) {
            return callback(new Error('用户名不能为空'));
          }else if(!reg.test(value)){
              return callback(new Error('请输入中文名称'))
          }else{
              callback();
          }
        };
        var checkEmail = (rule, value, callback) => {
          if(value.indexOf('@')>-1){
          }else {
            return callback(new Error('邮箱格式不正确'));
          }
          if (!value) {
            return callback(new Error('邮箱不能为空'));
          }else {
            axios.get("api/hospital-user-server/checkMail?mail="+value).then(res=>{
              if(res.data=="邮箱已经被注册"){
                return callback(new Error('邮箱已经被注册'));
              }else {
                callback();
              }
            })
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.checkPass !== '') {
              this.$refs.ruleForms.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForms.userpass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var checkPhone = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('手机号不能为空！'));
          }else {
            axios.get("api/hospital-user-server/checkPhone?phone="+value).then(res=>{
              if(res.data=="该手机号已经被注册"){
                return callback(new Error('该手机号已经被注册'));
              }else {
                callback();
              }
            })
          }
        };

        return{
          ruleForms:{
              userpass:'',
              username:'',
              usermail:'',
             userphone:'',
            checkPass:'',
            userpic:''
          },
          userR:{
            userName:'',
            userMail:'',
            userPass:'',
            userPhone:'',
            userPic:'http://122.51.42.29:8888/group1/M00/00/00/rBEAEF3JUMyAGmLQAAC_DmX_yHo35..jpg'
          },
            loading:false,
          rules: {
            userpass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            usermail: [
              { validator: checkEmail, trigger: 'blur' }
            ],
            username: [
              { validator: checkName, trigger: 'blur' }
            ],
            userphone:[
              { required: true, message: '请输入手机号码', trigger: 'blur' },
              { min: 11,max:11, message: '请输入正确的手机号码', trigger: 'blur' },
              { validator: checkPhone, trigger: 'blur'},
            ]
          },
          flag:false,
          user:[],
          count:'',//倒计时
        };
  },
  methods:{
    submitForm(formName){
        console.log(this.$refs[formName])
        this.$refs[formName].validate((valid)=>{
            if(valid){
              this.userR.userPass=this.ruleForms.userpass
              this.userR.userName=this.ruleForms.username
              this.userR.userMail=this.ruleForms.usermail
              this.userR.userPhone=this.ruleForms.userphone
              axios.post("api/hospital-user-server/regist",this.userR).then(res=>{
                this.$notify({
                  title: '注册成功',
                  message: '请前往注册邮箱进行激活后登录,3秒后跳转至登录页面',
                  duration: 3000
                });
                this.goGrdoupRecor();
              })
            }else{
                this.$message.error("请填写正确的个人信息！!")
            }
            return false;
        })
    },
    handleAvatarSuccess(res, file) {
      this.userpic = URL.createObjectURL(file.raw);
      this.userR.userpic=res
      this.loading=false
    },

    goGrdoupRecor(){
        //三秒后进入登陆页面
      const TIME_COUNT = 3;
      if(!this.timer){
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(()=>{
          if(this.count > 0 && this.count <= TIME_COUNT){
            this.count--;
          }else{
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            this.$router.push("/login");
          }
        },1000)
      }
    },
  }
  ,
  mounted(){
    var id= this.$cookie.get("userMsg")
    axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
      this.user=res.data
    })
    if(this.user!=null&&this.user!=""){
      this.flag=true;
    }
  }
}
</script>
<style>
  @import "static/css/regist.css";

</style>
