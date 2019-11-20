<template>
  <div style="margin: auto;width: 60%">
    <el-tag>添加管理员账户</el-tag>
    <el-divider></el-divider>
    <el-form style="width: 50%" :model="UserMsg">
      <el-form-item label="管理员姓名">
        <el-input v-model="UserMsg.userName"></el-input>
      </el-form-item>
      <el-form-item label="管理员密码">
        <el-input v-model="UserMsg.userPass" type="password"></el-input>
      </el-form-item>
      <el-form-item label="管理员邮箱">
        <el-input v-model="UserMsg.userMail" @blur="yanzhengyouxiang"></el-input>
      </el-form-item>
      <el-form-item label="管理员头像">
        <el-upload
          class="upload-demo"
          action="api/hospital-user-server/uploadPic"
          :on-success="handleAvatarSuccess">
          <img  :src=" this.imgUrl" class="avatar">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="管理员性别">
        <el-radio v-model="UserMsg.userGender" label="男">男</el-radio>
        <el-radio v-model="UserMsg.userGender" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="UserMsg.userAge"></el-input-number>
      </el-form-item>
      <el-form-item label="管理员手机号码" >
        <el-input v-model="UserMsg.userPhone" @blur="yanzhengshouji"></el-input>
      </el-form-item>
      <el-form-item label="是否激活">
        <el-switch v-model="UserMsg.isActivated"></el-switch>
      </el-form-item>
      <el-form-item label="身份权限">
        <el-radio v-model="UserMsg.identity" label="管理员" >管理员</el-radio>
      </el-form-item>
      <el-button class="el-button--success" @click="tianjiaguanliyaun">添加</el-button>
    </el-form>

  </div>
</template>
<style>
  .avatar{
    width: 200px;
    height: 150px;
  }
</style>
<script>
  import axios from  'axios'
  import ElSwitch from "../../../node_modules/element-ui/packages/switch/src/component";
  export default{
    components: {ElSwitch},
    data(){
          return{
            imgUrl:'',
            UserMsg:{
            },
            regyanzheng1:false,

          }
      },
    methods:{
      yanzhengyouxiang(){
          var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
          if(!reg.test(this.UserMsg.userMail)){
              alert("邮箱格式不正确")
            this.regyanzheng1=false
          }else {
            this.regyanzheng1=true
          }

      },
      yanzhengshouji(){
        var reg=/^\d{11}$/
        if(!reg.test(this.UserMsg.userPhone)){
            alert("手机号格式不正确,请输入11位数字")
          this.regyanzheng1=false
        }else {
            this.regyanzheng1=true
        }
      },
      handleAvatarSuccess(res,file){
        this.imgUrl=res
        this.UserMsg.userPic=res
      },
      tianjiaguanliyaun(){
          if(this.UserMsg.isActivated){
            this.UserMsg.isActivated=1
          }else {
            this.UserMsg.isActivated=0
          }
        this.UserMsg.gmtCreate=new Date()
        this.UserMsg.gmtModified=new Date()
          console.log(this.UserMsg)
        axios.post("api/houtai/tianjiaguanliyaun",this.UserMsg).then(res=>{
            this.$message.success(res.data)
        })
      }
    }
  }
</script>
