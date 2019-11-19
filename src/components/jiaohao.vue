<template>
  <div>
    <div>{{depart}}</div>
    <div>
    <input v-model="userMsg.userName"/>
    <input v-model="userMsg.userAge"/>
    <input v-model="userMsg.userGender"/>
  </div>
    <div>
      <button @click="next">下一位</button>
    </div></div>

</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              userMsg:{},
            depart:'肿瘤内科',
            num:0
          }
      },
    mounted(){
          //查询当前第一位排号人信息
          axios.get("api/hospital-alipay-server/showNumUser?depart="+this.depart+"&num=1").then(res=>{
              this.userMsg=res.data;
              this.num=1;
          })
    },
    methods:{
        next(){
          this.num+=1;
          alert(this.num);
          axios.get("api/hospital-alipay-server/showNumUser?depart="+this.depart+"&num="+this.num).then(res=>{
              
          })
        }
    }
  }
</script>
