<template>
  <div>
    <el-drawer
      title="用户信息"
      :visible.sync="drawer"
      :direction="direction">
      <div class="usermsgshow">姓名:{{this.usermsg.userName}}</div>
      <div class="usermsgshow">邮箱:{{this.usermsg.userMail}}</div>
      <div class="usermsgshow">性别:{{this.usermsg.userGender}}</div>
      <div class="usermsgshow">年龄:{{this.usermsg.userAge}}</div>
      <div class="usermsgshow">电话:{{this.usermsg.userPhone}}</div>
    </el-drawer>
    <el-drawer
      title="添加联系人"
      :visible.sync="drawer1"
      :direction="direction">
      <div  class="usermsgshow" >请输入联系人邮箱</div>
      <el-input style="width: 40%" v-model="usernameserach"></el-input>
      <el-button class="el-icon-circle-plus" @click="findemail">搜索</el-button>
    </el-drawer>
    <div class="chat1">
      <div style="text-align: center;color: #01AAED;font-size: 30px">健美聊天</div>
      <el-avatar  style="width: 100px;height: 100px" ><el-image @click="drawer=true" :src="this.usermsg.userPic"></el-image></el-avatar>
      <div style="color: dodgerblue;font-weight: bolder;margin: 10px;">{{this.usermsg.userName}}</div>
      <div style="padding-top: 50px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>联系人列表</span>
          <el-button style="float: right; padding: 3px 0" type="text"><el-dropdown trigger="click">
      <span class="el-dropdown-link">
        操作按钮<i class="el-icon-arrow-down el-icon--right"></i>
      </span><el-dropdown-menu slot="dropdown">
            <span @click="drawer1=true">  <el-dropdown-item icon="el-icon-plus" >添加联系人</el-dropdown-item> </span> </el-dropdown-menu>
          </el-dropdown></el-button>
        </div>
        <div v-for="(o,index) in lianxiren" :key="o" class="text item">
          <span style="color: #4cae4c ">[{{index+1}}]</span>
          <span style="margin-left: 10px;font-size: 15px;font-weight: bold;color: #1E9FFF" @click="drawer3=true">{{o }}</span>
          <el-drawer
            :visible.sync="drawer3"
            :direction="direction">
            <span style="margin-left: 100px;color: #4cae4c;font-weight: bolder;font-size: 30px">{{o}}</span>
            <div class="chatblock">
              <span style="color:black;font-size: 20px;font-weight: bolder">我:</span>
              <div style="margin-left: 20px;font-size: 16px" v-text="chatmessage"></div>
              <div v-if="true" >
                <span style="color:black;font-size: 20px;font-weight: bolder">{{}}:</span>
                <div style="margin-left: 20px;font-size: 16px" v-text="xyzsa"></div>
              </div>
            </div>
            <el-input type="textarea" v-model="chatmessage1" placeholder="按回车发送"
                      @keyup.enter.native="sendchatmessage(o)" style="width: 80%"></el-input>
            <el-divider></el-divider>
            <el-button class="el-icon-s-promotion" @click="sendchatmessage(o)">发送</el-button>
          </el-drawer>
        </div>
      </el-card>
    </div>
    </div>
  </div>
</template>
<style>
  .usermsgshow{
    color: #1E9FFF;
    font-size: 15px;
    line-height: 20px;
    height: 50px;
    letter-spacing: 4px;
  }
  .chatblock {
    width: 80%;
    height: 50%;
    background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3476609867,2277334519&fm=26&gp=0.jpg");
  }
  .text {
    font-size: 14px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
  .item {
    margin-bottom: 18px;
  }
  .chat1{
    margin: auto;
    width: 635px;
    height: 867px;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573744117271&di=599ea3468b39cb1f59d154bf9441e8e0&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1707%2F125-1FH6121100.jpg");
  }
</style>
<script>
  import axios  from 'axios'
  var ws;
  export default{
    data(){
          return{
              hh:false,
            chatmessage:'',
            chatmessage1:'',
            lianxiren:[],
            usernameserach:'',
            direction: 'rtl',
            drawer:false,
            drawer1:false,
            drawer3:false,
            chatmsg:'',
            usermsg:{},
            xyzsa:'',
          }
      },
      methods:{
        usermsgcheck(){

        },
        //连接关闭的回调方法
        finduserbyid(){
          axios.get("ybq/hospital-user-server/getUserMsg?id=10").then(res=>{
              this.usermsg=res.data
          })
        },
        sendchatmessage(o){
          ws=new WebSocket("ws://localhost:8012/mychat");
          ws.onopen=function () {
          }
          this.chatmessage=this.chatmessage1;
          var sendms={'user':o,'msg':this.chatmessage}
          ws.send(JSON.stringify(sendms))
          this.chatmessage1=''
          ws.onmessage=function (event) {
            alert(1)
          }
          ws.close()
        },
        findemail(){
          axios.get("ybq/hospital-user-server/checkMail?mail="+this.usernameserach).then(res=>{
              if(res.data=="邮箱已经被注册"){
                 axios.get("api/redis/insertemail?email="+this.usernameserach).then(res=>{
                   this.$message(res.data)
                 })
              }
          })
        },
        findemailnames(){
            axios.get("api/redis/findemails").then(res=>{
                this.lianxiren=res.data
            })
        },
      },
      mounted(){
        this.findemailnames()
        this.finduserbyid()
      }
  }
</script>
