<template>
  <div>
    <div class="line1" >
      <el-input type="textarea" v-model="pinglunlist.mess" placeholder="输入内容" ></el-input>
      <el-input v-model="pinglunlist.uname" placeholder="输入用户"></el-input>
      <el-button class="el-icon-s-promotion" @click="sendpinglun">发布评论</el-button>
      <el-divider></el-divider>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>评论列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="(o,index) in pinglun" :key="index" class="text item">
          <span style="color: red;font-size: 18px">[{{index+1}}]</span>楼:<span style="color:blue">{{o.uname}}</span>
          <div style="font-size: 14px;text-indent: 20px"> <el-tooltip class="item" effect="dark" content="点击追加评论" placement="top"><span style="color: red;font-size: 12px" @click="drawer=true">
           评论内容 </span></el-tooltip>{{ o.mess }}</div>
          <div style="float: right">{{timestampToTime(o.date)}}</div>
        </div>
      </el-card>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        >
        <el-input type="textarea" v-model="pinglunlist.mess" placeholder="输入内容"></el-input>
        <el-input v-model="pinglunlist.uname" placeholder="输入用户"></el-input>
        <el-button class="el-icon-s-promotion" @click="sendpinglun">发布评论</el-button>
      </el-drawer>

    </div>
  </div>
</template>
<style>
  .line1{
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573744117271&di=599ea3468b39cb1f59d154bf9441e8e0&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1707%2F125-1FH6121100.jpg");
    width: 69%;
    height: 700px;
    overflow: auto;
    margin: auto;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
</style>
<script>
  import axios from 'axios'
  export default{
    data(){
          return{
            drawer:false,
            direction:'',
            pinglunlist:{'uname':'','mess':'','date':''},
            pinglun:[]
          }
      },
    methods:{
      addplus(){
      },
      sendpinglun(){
        this.pinglunlist.date=new Date()
        axios.post("api/redis/addlistpinglun",this.pinglunlist).then(res=>{
            this.$message.success(res.data)
            this.pushlist()
        })
      },

      timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
      },
        pushlist(){
          axios.get("api/redis/findallpinlun").then(res=>{
              this.pinglun=res.data
          })
        }
    },
    mounted(){
        this.pushlist()
    }
  }
</script>
