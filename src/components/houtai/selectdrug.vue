<template>
  <div >
    <download-excel
      class = "export-excel-wrapper"
      :data = "drugmsg"
      style="width: 100px;background-color: #8EC172"
      name = "药品详单.xls">
      <el-button class="el-icon-document">
        导出
      </el-button>
    </download-excel>
    <el-divider></el-divider>
    <el-table :data="drugmsg" style="width: 100%">
      <el-table-column
        type="index"
        >
      </el-table-column>
      <el-table-column prop="drugName" label="药品名称" width="100"></el-table-column>
      <el-table-column prop="drugSyz" label="药品适应症" width="100"></el-table-column>
      <el-table-column prop="drugManu" label="药品生产企业" width="100"></el-table-column>
      <el-table-column prop="drugPrice" label="药品参考价格" width="100"></el-table-column>
      <el-table-column prop="drugType" label="药品类型" width="100"></el-table-column>
      <el-table-column prop="drugGgxh" label="药品规格型号" width="100"></el-table-column>
      <el-table-column prop="drugPic" label="药品图片">
        <template   slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.drugPic"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="drugYfyl" label="药品用法用量"></el-table-column>
      <el-table-column prop="drugYfyl" label="药品用法用量"></el-table-column>
      <el-table-column prop="gmtCreate" label="创建时间">
        <template slot-scope="scope">
          <span>{{timestampToTime(scope.row.gmtCreate)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gmtModified" label="修改时间">
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
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="pagefenye"
      :page-size="this.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=total>
    </el-pagination>

  </div>
</template>
<script>
  import axios from 'axios'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElDivider from "../../../node_modules/element-ui/packages/divider/src/main";
  export default{
    components: {
      ElDivider,
      ElButton},
    data(){
          return{
            total:100,
            page:1,
            pagesize:5,
            search:'',
            drugmsg:[],
            pagefenye:[5,20,30,40]
          }
      },
    methods:{
      handleSizeChange(val){
        this.pagesize=val
        this.selectall()
      },
      handleCurrentChange(val){
        this.page=val
        this.selectall()
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
      handleEdit(x,y){
        this.$router.push({path:'/updatedrug',query:{id:y.pkDrugid}})
      },
      handleDelete(x,y){
        this.$confirm('确认删除？')
          .then(_ => {
            axios.get("api/houtai/deleteById/"+y.pkDrugid).then(res=>{
              this.$message.info("删除成功")
              this.selectall()
            })
              .catch(_ => {});
          })
      },
      handledaochu(row){
          console.log(row)
          axios.post("api/houtai/export",row).then(res=>{
              this.$message.success(res.data)
          })
      },
      selectBySearch(){
//        search:关键字检索
//          alert(12)
      },
      selectall(){
        axios.get("api/houtai/findall/"+this.page+"/"+this.pagesize).then(res=>{
          this.drugmsg=res.data.list
          this.total=res.data.allcount

        })
      }
    },
    mounted(){
       this.selectall()
    }

  }
</script>
