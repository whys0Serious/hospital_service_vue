<template>
  <div>
    <div class="departno">
      用户:<span class="text-xiahuaxian"><span style="color: #01AAED;">{{user.userName}}</span></span>,你的病历记录如下
    </div>
    <div class="line1">
      健美医疗门诊部
      <div style="margin-top: 40px;">门诊病历</div>
    </div>
    <div class="line2">
      <el-carousel  arrow="hover" interval="100000" trigger="click">
        <el-carousel-item v-for="item in history" :key="item">
          <el-card class="box-card">
            <div  class="text item">
              <div>医生姓名:<span class="text-xiahuaxian">{{item.docName}}</span></div>
              <div>科室名称:<span class="text-xiahuaxian">{{item.department}}</span><span></span></div>
              <div >疾病名称:<span class=" text-xiahuaxian">{{item.diseaseName}}</span></div>
              <div>使用的药品名称:<span class=" text-xiahuaxian">{{item.drugName}}</span></div>
              <div>症状描述:<span class=" text-xiahuaxian">{{item.diseaseInfo}}</span></div>
              <div>医嘱:<span class=" text-xiahuaxian">{{item.docAdvice}}</span></div>
              <div>药品消费金额:<span class=" text-xiahuaxian">{{item.drugPrice}}</span></div>
              <div>创建时间:<span class=" text-xiahuaxian">{{item.gmtCreate}}</span></div>
              <div class="line3">门诊部电话:<span class="bottomsize">陕西省西安市健美医院</span></div>
              <div class="line3">门诊部地址:<span class="bottomsize">225-125523</span></div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        history:[],
        user:{}
      }
    },
    mounted(){
        var id=this.$cookie.get('userMsg');
        axios.get("api/hospital-registered-server/showHistory?id="+id).then(res=>{
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].gmtCreate!=null){
              var d=new Date(res.data[i].gmtCreate);
              res.data[i].gmtCreate=d.getFullYear() + '-' + (d.getMonth() + 1)
                + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            }
          }
            this.history=res.data;
        })
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
        this.user=res.data
      })
    }
  }
</script>
<style>
  .bottomsize{
    color: #1E9FFF;
    font-size: 15px;
    font-weight: bold;
  }
  .line3{
    text-align: right;
  }
  .text-xiahuaxian{
    margin: 10px;
    text-decoration: none;
  }
  .line2{
    width: 60%;
    margin: auto ;
    height: 200px;
    text-align: left;
    line-height: 40px;
    font-size: 20px;
    color: green;
  }
  .line1{
    width: 60%;
    margin: auto;
    background-color: #6fffff;
    height: 200px;
    text-align: center;
    font-size: 40px;
    color: green;
    background-image: url("https://f12.baidu.com/it/u=3808181901,907796438&fm=72");
  }
  .departno{
    margin: auto;
    font-size: 20px;
    font-weight: bolder;

  }
</style>
