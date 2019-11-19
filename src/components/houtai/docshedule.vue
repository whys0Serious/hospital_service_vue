<template>
  <div>
    <el-row>
      <download-excel
        style="width: 100px;background-color: #8EC172"
        class = "export-excel-wrapper"
        :data = "docshedule"
        name = "排班详单.xls">
        <el-button>
          导出
        </el-button>
      </download-excel>
    </el-row>
    <el-table
      :data="docshedule"
      style="width: 100%">
      <el-table-column
        prop="docName"
        label="医生姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="department"
        label="所在科室"
        width="180">
      </el-table-column>
      <el-table-column
        prop="workTime"
        label="上班时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="week"
        label="上班星期"
        width="180">
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
            search:'',
            docshedule:[]
          }
      },
    mounted(){
      this.findalldoc()
    },
    methods:{
          findalldoc(){
              axios.get("api/houtai/findalldoc").then(res=>{
                  this.docshedule=res.data
              })
          },
      handleEdit(x,y){
        this.$router.push({path:'/updatedocshedule',query:{id:y.pkShid}})
      },
      handleDelete(x,y){
        axios.get("api/houtai/deleteByIdds/"+y.pkShid).then(res=>{
          this.$message.info("删除成功")
          this.findalldoc()
        })
      },
      selectBySearch(){
//        search:关键字检索
//          alert(12)
      },
    }
  }
</script>
