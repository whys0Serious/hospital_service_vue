<template>
  <div>
    <div id="contains">
      <div id="top">
        <li class="el-icon-s-order" style="color: #4298e8;margin-left: 550px;font-weight: bolder;font-size: larger;line-height: 50px">健美医院网络挂号订单信息</li>
      </div>
      <div id="message">
       <div id="table">
         <el-table
           :data="order"
           border="true"
           style="width: 100%;"
           >
           <el-table-column
             prop="gmtCreate"
             align="center"
             label="日期">
             <template slot-scope="scope">
                 <span>{{timestampToTime(scope.row.gmtModified)}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="docName"
             align="center"
             label="医生姓名">
           </el-table-column>
           <el-table-column
             align="center"
             prop="depName"
             label="挂号科室">
           </el-table-column>
           <el-table-column
             align="center"
             prop="price"
             label="挂号收费">
           </el-table-column>
           <el-table-column
             align="center"
             prop="orderNum"
             label="订单编号">
           </el-table-column>
           <el-table-column
             align="center"
             prop="statement"
             label="支付状态">
           </el-table-column>
           <el-table-column
             align="center"
             label="操作">
             <template slot-scope="scope">
             <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
             </template>
           </el-table-column>
         </el-table>
       </div>
        <div id="button">
          <el-pagination
            background
            layout="prev, pager, next"
             style="margin-left: 500px"
            :page-size="this.pageBean.size"
            v-on:current-change="changePage" :total="total" :current-page="this.pageBean.page">
          </el-pagination>
        </div>
    </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              order:[],
            pageBean:{
              page:1,
              size:2,
              id:''
            },
            payBack:{
                  userId:'',
                  orderNum:''
            },
            backOrder:{},
            total:0
          }
      },
    methods:{
      timestampToTime(timestamp){
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
      },
      changePage(i){
          this.pageBean.page=i;
          this.query();
      },
      query(){
        axios.post('api/hospital-alipay-server/showOrderByPage',this.pageBean).then(res=>{
          this.order=res.data.list;
          this.total=res.data.total;
        })
      },
      /*
      * 再次支付未支付订单
      * */
      handleClick(row){
          this.backOrder.orderNum=row.orderNum;
          this.backOrder.price=row.price
          this.backOrder.depName=row.depName;
          axios.post('api/hospital-alipay-server/pay',this.backOrder).then(res=>{
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
      /*
       * 先从cookie中获取用户          * */
      this.pageBean.id=this.$cookie.get("userMsg");
      this.query();
      /*
      * 支付成功回调时修改订单状态
      * */
      this.payBack.orderNum=this.$route.query.out_trade_no;
      this.payBack.userId=this.pageBean.id
      axios.post("api/hospital-alipay-server/payback",this.payBack).then(res=>{
          this.$message.success("挂号成功！")
      })
    }
  }
</script>


<style>
  #contains{
    width: 100%;
    height: 600px;
    float: left;
  }
  #top{
    width: 100%;
    height: 50px;
    float: left;
  }
  #message{
    width: 100%;
    height: 550px;
    float: left;
  }
  #table{
    width: 100%;
    height: 500px;
    float: left;
  }
  #button{
    width: 100%;
    height: 50px;
    float: left;
  }
</style>
