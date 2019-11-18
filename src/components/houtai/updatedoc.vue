<template>
  <div>
    <el-form ref="DocMsg" :model="DocMsg" label-width="20%" style="width: 40%">
      <el-form-item label="姓名">
        <el-input v-model="DocMsg.docName"></el-input>
      </el-form-item>
      <el-form-item label="所在科室">
        <el-select  v-model="DocMsg.department" placeholder="请选择医生所在科室">
          <el-option v-for="(d,i) in depart"  :value="d" :label="d"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专长">
        <el-input v-model="DocMsg.specialty" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="DocMsg.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="工作年龄">
        <el-input-number v-model="DocMsg.workingAge"></el-input-number>
      </el-form-item>
      <el-form-item label="当月出勤数（月清零）"  label-width="40%">
        <el-input v-model="DocMsg.attendance" type="number"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        depart: [],
        DocMsg: {
          docName: '',
          department: '',
          specialty: '',
          gender: '',
          workingAge: '',
          attendance: ''
        }
      }
    },
    mounted(){
      axios.get("api/houtai/findnamesdoc").then(res=>{
        this.depart=res.data
      })
      axios.get("api/houtai/findbyid/"+this.$route.query.id).then(res=>{
        this.DocMsg=res.data
      })
    },
    methods:{
      onSubmit(formName) {
        axios.post("api/houtai/updatedocmsg",this.DocMsg).then(res=>{
          this.$notify({
            title: '修改成功',
            message: '一条记录已经'+res.data,
            type: 'success',
            position: 'bottom-left'
          });
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
