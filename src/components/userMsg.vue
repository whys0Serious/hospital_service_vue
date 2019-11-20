<template>
<div>
  <div id="contain" style="overflow:hidden;">
    <div id="userShow">
      <div id="userPic">
        <div id="touxiang">
          <el-image
            style="width: 230px; margin-top: 20px;margin-left: 100px;height: 230px;border-radius: 100%"
            :src="user.userPic"></el-image>
        </div>
        <div id="name"><span style="line-height: 60px;margin-left: 38%;font-weight: bolder;color:#4298e8;font-size: large"><span v-if="this.gituser">{{this.gituser}},您好</span><span v-if="user.userName">{{user.userName}},您好</span></span></div>
        <div id="message">
          <el-upload
            class="avatar-uploader"
            action="api/hospital-user-server/uploadPic"
            :show-file-list="false"
            :on-success="success">
            <i class="el-icon-camera" style="margin-left: 165px;">点击修改头像</i>
          </el-upload>
        </div>
      </div>
    </div>
    <div id="formMsg">
      <div id="centerMsg">
        <el-form status-icon :rules="rules" ref="ruleForm" style="width: 70%;margin-left: 100px;margin-top: 60px" label-width="80px" :model="user">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input type="password" v-model="user.userPass":disabled="true"></el-input>
            <i class="el-icon-edit" style="color: blue">修改密码</i>
          </el-form-item>
          <el-form-item label="邮箱地址" prop="userMail">
            <el-input v-model="ruleForm.userMail"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="userPhone">
            <el-input v-model="ruleForm.userPhone"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="userAge" :rules="[{ type: 'number', message: '年龄必须为数字值'}]"maxlength="10">
            <el-input type="text" show-word-limit v-model.number="ruleForm.userAge"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="background-color: #4298e8;margin-left: 30%;border: 0px" @click="submitForm('ruleForm')">修改个人信息</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
export default{
    data(){
        return {
          gituser:'',
          user: {
              userPic:'',
              userName:'',
              userPass:'',
              userMail:'',
              userPhone:'',
              userGender:''
          },
          options: [{
            value: '男',
            label: '男'
          }, {
            value: '女',
            label: '女'
          }],
          value: '',
          ruleForm:{
              userName:'',
              userAge:'',
              userPhone:'',
              userMail:'',
              userGender:''
          }
        }
    },
  methods:{
    success(res,file){
      var id=this.$cookie.get("userMsg")
      this.user.userPic=res;
      if(id!=null){
        axios.get('api/hospital-user-server/updatePic?pic='+this.user.userPic+"&id="+id).then(res=>{
          if(res.data!='fail'){
            this.$message.success("头像修改成功！")
          }
        })
      }else{
        this.$message.error("当前网络异常，请稍后重试")
      }
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.user.username=this.ruleForm.userName
          this.user.userAge= this.ruleForm.userAge
          this.user.userPhone=this.ruleForm.userPhone
          this.user.userMail=this.ruleForm.userMail
          this.user.userGender=this.value
          var id=this.$cookie.get("userMsg")
          this.user.pkUid=id
          axios.post('api/hospital-user-server/updateUserMsg',this.user).then(res=>{
              if(res.data=='success'){
                  this.$message.success("修改成功！")
                  //再次查询用户信息
                var id=this.$cookie.get("userMsg")
                axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
                  this.user=res.data;
                  this.ruleForm=res.data;
                })

              }else{
                this.$message.error("当前网络异常,请稍后重试")
              }
          })
        } else {
          this.$message.error("当前网络异常，请稍后重试！")
          return false;
        }
      });
  }
  },
  mounted(){
        var id=this.$cookie.get("userMsg")
        console.log(id)
        this.gituser=this.$cookie.get("gituser")
        axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
            this.user=res.data;
            this.ruleForm=res.data;
            this.value=res.data.userGender
        })
  },
}
</script>
<style>
#contain{
  width: 100%;
  height: 100%;
  background-color: #f3eddf63;
  position: absolute;
  float: left;
}
  #userShow{
    float: left;
    width: 40%;
    height:100%;
  }
  #formMsg{
    float: left;
    width: 60%;
    height: 100%;
  }
  #centerMsg{
    float: left;
    width: 85%;
    height:90%;
    background-color: white;
    margin-left: 7%;
    border-radius: 10px;
    margin-top: 30px;
  }
  #userPic{

    float: left;
    width: 80%;
    height:60%;
    margin-left: 80px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: white;
  }
  #touxiang{
    float: left;
    width: 100%;
    height: 70%;

  }
  #name{
    float: left;
    width: 100%;
    height:15%;
  }
  #message{
    float: left;
    width: 100%;
    height:15%;
  }
</style>

