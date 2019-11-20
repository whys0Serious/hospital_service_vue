<template>
  <div>
    <div style="width: 50%;margin: auto;background-color: #1E9FFF">
    <el-input v-model="ms1" @keyup.enter.native="sendms1" placeholder="回车发送消息"></el-input>
      <el-button @click="recievems1" >接收消息</el-button>
      <div v-for="item in listms1" >
        <div>{{item}}</div>
      </div>
    </div>
    <el-button class="el-icon-mouse" @click=""><a href="https://github.com/login/oauth/authorize?client_id=bb9ea8105130af560a80&scope=user,public_repo">登陆</a></el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
          return{
            ms1:'',
            listms1:[]
          }
      },
    methods:{
      loginauth(){
        axios.get("").then(res=>{
            alert(res.data)
        })
      },
      sendms1(){
          axios.get("api/mq/sendms1/"+1+"/"+this.ms1).then(res=>{
              this.$message.success(res.data)
          })
      },
      recievems1(){
         axios.get("api/mq/recievems1").then(res=>{
             this.listms1.push(res.data)
         })
      }
    }

  }
</script>
