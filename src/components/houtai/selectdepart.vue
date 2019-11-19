<template>
  <div>
    <el-row>
      <download-excel
        style="width: 100px;background-color: #8EC172"
        class = "export-excel-wrapper"
        :data = "drugdept"
        name = "部门详单.xls">
        <el-button>
          导出
        </el-button>
      </download-excel>
    </el-row>
    <el-table
      :data="drugdept"
      style="width: 100%">
      <el-table-column
        prop="depName"
        label="科室名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="charge"
        label="该科室门诊收费"
        width="180">
      </el-table-column>
      <el-table-column
        prop="visitNum"
        label="就诊率"
        width="180">
      </el-table-column>
      <el-table-column
        prop="departmentPic"
        label="科室图片"
        width="180">
        <template   slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.departmentPic"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
        label="科室类型"
        prop="departmentType"
        width="400">
        <el-table-column type="expand" width="300">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="部门介绍">
                {{props.row.departmentType}}
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
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
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        huya:'3123',
        direction:'ttb',
        drawer:true,
        search:'',
        drugdept:[]
      }
    },
    methods:{
      handleEdit(x,y){
        this.$router.push({path:'/updatedepart',query:{id:y.pkDepid}})
      },
      handleDelete(x,y){
        axios.get("api/houtai/deleteByIddepart/"+y.pkDepid).then(res=>{
          this.$message.info("删除成功")
          this.selectall()
        })
      },
      showdetails(){
        alert(1)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      selectBySearch(){
//        search:关键字检索
//          alert(12)
      },
      selectall(){
        axios.get("api/houtai/findalldepart").then(res=>{
          this.drugdept=res.data
        })
      }
    },
    mounted(){
      this.selectall()
    }
  }
</script>

