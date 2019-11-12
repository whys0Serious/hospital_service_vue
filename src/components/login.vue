<template>
  <div>
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
        <!--<div class="con_panel">-->
          <!--<div class="con_input">-->
            <!--<span>用户名：</span><input type="text" placeholder="学号/工号"/>-->
          <!--</div>-->
          <!--<div class="con_input">-->
            <!--<span>密码：</span><input type="text" placeholder="密码"/>-->
          <!--</div>-->
        <el-form  status-icon :rules="rules" ref="ruleForm"  label-width="80px" :model="ruleForm" class="demo-ruleForm">
          <el-form-item label="用户名:" prop="name">
            <el-input class="con_input" v-model="ruleForm.name" placeholder="请输入邮箱/手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="pass">
            <el-input type="password" class="con_input" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
          </el-form-item>
          <!--<el-checkbox-group-->
            <!--v-model=" checkedCities"-->
            <!--:min="1"-->
            <!--:max="1"-->
            <!--class="con_select">-->
            <!--<el-checkbox v-for="role in roles" :label="role" :key="role">{{role}}</el-checkbox>-->
          <!--</el-checkbox-group>-->
            <el-radio v-model="ruleForm.role" label="用户">用户</el-radio>
            <el-radio v-model="ruleForm.role" label="医生" >医生</el-radio>
            <el-radio v-model="ruleForm.role" label="管理员">管理员</el-radio>
        <el-form-item>
          <el-button @click="submitForm('ruleForm')" style="background-color:yellowgreen;border: 0px;color: white">立即登录</el-button>
          <el-button @click="forRegist()" style="background-color: lightblue;color:white;border: 0px">前往注册</el-button>
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
            user:{//发送到后台
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
            }
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
            this.user.userPass = this.ruleForm.pass
            this.user.userMail= this.ruleForm.name
            this.user.identity = this.ruleForm.role
            axios.post("api/hospital-user-server/login",this.user).then(res=>{
                if(res.data=='登录信息有误，请重试！'){
                  this.$message.error(res.data);
                }else{
                  this.$message.success(res.data);
                  this.$router.push("/")
                }
            })
          }
          return false;
        })
      },
    }

  }
</script>
<style>
  @import "static/css/login.css";
</style>
