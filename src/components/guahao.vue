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
  <div id="contain">
    <div id="top">
      <el-steps :space="200" :active="1" finish-status="success" align-center="true" style="margin-top: 40px;margin-left: 30%">
        <el-step title="确认挂号信息"></el-step>
        <el-step title="线上支付"></el-step>
        <el-step title="挂号完成"></el-step>
      </el-steps>
    </div>
    <div id="center">
        <div id="border">
          <div id="left">
          <div id="left_top">
           <img :src="user.userPic" style="border-radius: 100%;margin-top: 20px;width: 250px;height: 250px" />
          </div>
            <div class="left_bottom">
              <i class="el-icon-first-aid-kit"></i>当前科室医生挂号排队人数：<span style="color: red">{{number}}</span>人
            </div>
            <div class="left_bottom">
                <i class="el-icon-alarm-clock" style="float:left;margin-top: 4px;font-weight: bolder;margin-left: 80px">预计等待时间:</i>
                <div v-if="this.number>10">
                  <span style="color: red;margin-left:50px">一小时以上</span>
                </div>
              <div v-if="this.number<10&&this.number>1">
                <span style="color: red;float:left;margin-left:50px">半个小时之内</span>
              </div>
              <div v-if="this.number==0">
                <span style="color: red;float:left;margin-left: 50px">立即就诊</span>
              </div>
              </div>

          </div>
          <div id="right">
            <div id="right_level1">
              <i class="el-icon-money" style="color: orangered;margin-top: 20px;font-size: large">确认就诊信息</i>
            </div>
            <div id="docMsg">
              <div id="dname">
                <span style="margin-left:1px;font-size: large">医生姓名:{{doctor.docName}}</span>
              </div>
              <div id="dpic">
                <img :src="doctor.docPic" style="width: 128px;height: 128px;border-radius: 100%;margin-top: 4px"/>
              </div>
            </div>
            <div class="right_level2">
            <span style="float: left;margin-top: 20px;margin-left: 20px">挂号科室:{{doctor.department}}</span>
          </div>
            <div class="right_level2">
              <span style="float: left;margin-top: 20px;margin-left: 20px">选择时段:</span>
              <el-select v-model="shiduan" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.shiduan"
                  :label="item.label"
                  :value="item.shiduan"
                  :disabled="item.disabled">
                </el-option>
              </el-select>
            </div>
            <hr/>
            <div id="right_bottom">
              <div id="little" style="margin-top: 70px"><span style="margin-left: 320px;font-size: smaller;text-align: center">消费结算</span></div>
              <div id="sum"><span style="margin-left: 320px">小计:<span style="font-size:x-large;color: orangered;margin-left: 10px" >{{price}}</span>元</span></div>
            </div>
          </div>
        </div>

      <div id="bottom">

        <div id="b_top">
          <hr/>
          <li class="el-icon-user-solid" style="color: #4298e8;">确认就诊人信息</li>
        </div>
        <div id="b_userMsg">
            <div id="center_msg">
              <el-form status-icon  style="margin-left:30px;margin-top: 60px" label-width="140px" :model="user">
                <el-form-item label="用户名" prop="userName">
                  <el-input v-model="user.userName"></el-input>
                </el-form-item>
                <el-form-item label="通知挂号手机号码" prop="userPhone"
                              :rules="[
      { required: true, message: '手机号码不能为空'}]">
                  <el-input v-model="user.userPhone"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="userAge" >
                  <el-input v-model="user.userAge":disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-input  v-model="user.userGender" :disabled="true"></el-input>
                </el-form-item>
              </el-form>
            </div>
          <div id="b_bottom">
            <div id="button" style="margin-left: 600px;margin-top: 10px">
              <span>总计：<span style="color: red;font-size: larger;font-weight: bolder">￥{{price}}</span></span>
              <button id="b_button" @click="pay">确认挂号</button> <button id="b_button2"><router-link to="/">取消挂号</router-link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        time:'',
        flag:false,
        price:'',
        user:{},
        number:0,
        options: [{
          shiduan: '上午',
          label: '上午',
          disabled: false
        }, {
          shiduan: '下午',
          label: '下午',
          disabled: false
        }],
        shiduan:'',
        doctor:{
          docName:"",
          department:'',

        },
        order:{}
      }
    },
    methods:{
        /*
        * 注销
        * */
      loginOut(){
        var id=this.$cookie.get("userMsg")
        axios.get("api/hospital-user-server/loginOut?id="+id).then(res=>{
          this.$message.info("注销成功！")
        })
        this.$cookie.set("userMsg",id,{
          expires:0})
        this.flag=false;
        this.$router.go(0)
      },
      /*
       * 发送支付请求
       * */
          pay(){
            //为订单类赋值
              this.order.userId=this.user.pkUid;
              this.order.docName=this.doctor.docName
              this.order.depName=this.doctor.department
              this.order.price=this.price
              axios.post("api/hospital-alipay-server/pay",this.order).then(res=>{
                if(res.status==200){
                  //重定向
                  let routerData = this.$router.resolve({path:'/ApplyMark',query:{htmls:res.data}})
                  this.htmls = res.data
                  window.open(routerData.href,'_blank')
                  const div = document.createElement('div');
                  div.innerHTML = htmls;
                  document.body.appendChild(div);
                  document.forms [0] .submit();
                }
              })
          }
    },
    mounted(){

      var id= this.$cookie.get("userMsg")
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
        this.user=res.data
        this.flag=true;
      })
      if(this.user!=null&&this.user!=""){
        this.flag=false;
      }

      /*
      * 查询医生信息
      * */
      var did=this.$route.query.id;
      axios.get("api/hospital-registered-server/findDocMsg?did="+did).then(res=>{
        this.doctor=res.data;
        /*
         * 查询价格
         * */
        axios.get("api/hospital-registered-server/findPrice?depname="+this.doctor.department).then(res=>{
          this.price=res.data;
        })
        /*
        * 挂号人数
        * */
        axios.get("api/hospital-alipay-server/showNums?depart="+this.doctor.department+"&doc="+this.doctor.docName).then(res=>{
          if(res.data!=""){
            this.number=res.data;
          }

        })
    })

    },
  }
</script>
<style>
  @import "static/css/guahao.css";
</style>
