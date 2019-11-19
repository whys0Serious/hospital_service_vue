<template>
  <div>
    <el-row>
      <download-excel
        class = "export-excel-wrapper"
        :data = "DocMsg"
        style="width: 100px;background-color: #8EC172"
        name = "医生详单.xls">
        <el-button>
          导出
        </el-button>
      </download-excel>
    </el-row>
      <el-drawer
        title="医生资格审核"
        style="height: 150px"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <span><el-button class="el-icon-check" @click="accessshenhe(0,this)">通过审核</el-button></span>
        <span><el-button class="el-icon-close" @click="accessshenhe(1,this)">取消资格</el-button></span>
      </el-drawer>
    <el-table
      :data="DocMsg"
      style="width: 100%">
      <el-table-column
        prop="docName"
        label="医生名称"
        width="180" >
      </el-table-column>
      <el-table-column
        prop="department"
        label="科室名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="specialty"
        label="医生专长介绍"
        width="180">
        <el-table-column type="expand" width="300">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="医生专长介绍">
                {{props.row.specialty}}
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="workingAge"
        label="工作年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="attendance"
        label="当月出勤数"
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
            class="el-icon-delete-solid"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            class="el-icon-more-outline"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          <el-button size="mini" type="primary" class="el-icon-setting" @click="handleshehe(scope.row)">审核</el-button>
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
            drawer:false,
            direction:'rtl',
              search:'',
            pkdocid:'',
              DocMsg:[]
          }
      },
    mounted(){
        this.findall()
    },
    methods:{
      handleshehe(row){
        this.drawer=true
        this.pkdocid=row.pkDocid
      },
      accessshenhe(x){
        this.drawer=false
        if(x==0){
            alert('通过'+this.pkdocid)
        }
        if(x==1){
            alert('取消'+this.pkdocid)
        }

      },
          findall(){
              axios.get("api/houtai/docMsgList").then(res=>{
                this.DocMsg=res.data
              })
          },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleEdit(x,y){
        this.$router.push({path:'/updatedoc',query:{id:y.pkDocid}})
      },
      handleDelete(x,y){
        this.$confirm('确认删除？')
          .then(_ => {
            axios.get("api/houtai/deleteByIdDoc/"+y.pkDocid).then(res=>{
              this.$message.info("删除成功")
              this.findall()
          })
          .catch(_ => {});
        })
      },
      selectBySearch(){
//        search:关键字检索
//          alert(12)
      },
    }
  }
</script>
