<template>
  <div>

    <el-row>
      <download-excel
        class = "export-excel-wrapper"
        :data = "UserMsg"

        name = "医生详单.xls">
        <el-button>
          导出
        </el-button>
      </download-excel>
    </el-row>
    <el-tag type="success">医生注册认证</el-tag>
    <el-table :data="UserMsg" style="width: 100%">
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="userMail"  label="邮箱"></el-table-column>
      <el-table-column prop="userPic"  label="头像">
        <template slot-scope="scope">
        <el-image :src="scope.row.userPic"></el-image></template>

      </el-table-column>
      <el-table-column prop="userGender"  label="性别"></el-table-column>
      <el-table-column prop="userAge"  label="年领"></el-table-column>
      <el-table-column prop="userPhone"  label="电话"></el-table-column>
      <el-table-column prop="isActivated"  label="是否激活" >
        <template slot-scope="scope">
          <span v-if="scope.row.isActivated==0">未激活</span>
          <span v-if="scope.row.isActivated==1">已激活</span>
        </template>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="创建时间" >
        <template slot-scope="scope">
          <span>{{timestampToTime(scope.row.gmtCreate)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gmtModified" label="修改时间" >
        <template slot-scope="scope">
          <span>{{timestampToTime(scope.row.gmtModified)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索" @change="selectBySearch"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            class="el-icon-more-outline"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          <el-button size="mini" type="primary" class="el-icon-setting" @click="handleshehe(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      title="医生资格审核"
      style="height: 150px"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <span><el-button class="el-icon-check" @click="accessshenhe(0,this)">通过审核</el-button></span>
      <span><el-button class="el-icon-close" @click="accessshenhe(1,this)">取消资格</el-button></span>
    </el-drawer>

  </div>
</template>
<script>
  import axios from 'axios'
  import ElImage from "../../../node_modules/element-ui/packages/image/src/main";
  export default{
    components: {ElImage},
    data(){
          return{
            drawer:false,
            direction:'rtl',
            UserMsg:[],
            pkdocid:'',
          }
      },
    mounted(){
      this.findallyiseng()
    },
    methods:{
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleshehe(row){
        this.drawer=true
        this.pkdocid=row.pkDocid
      },
      accessshenhe(x){
        this.drawer = false
        if (x == 0) {
          axios.get("api/houtai/xiugaizige/"+this.pkdocid+"/"+1).then(res=>{
            this.$message.success(res.data)
            this.findallyiseng()()
          })
        }
        if (x == 1) {
          axios.get("api/houtai/xiugaizige/"+this.pkdocid+"/"+0).then(res=>{
            this.$message.success(res.data)
            this.findallyiseng()()
          })
        }


      },
      handleDelete(x,y){
        this.$confirm('确认删除？')
          .then(_ => {
            axios.get("api/houtai/deleteByIdDoc/" + y.pkDocid).then(res => {
              this.$message.info("删除成功")
              this.findall()
            })
              .catch(_ => {
              });
          })
      },
        findallyiseng(){
            axios.get("api/houtai/yishengzhuce").then(res=>{
                this.UserMsg=res.data
            })
        }
    }

  }
</script>
