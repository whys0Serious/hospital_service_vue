<template>
  <div>
    <el-form :model="drugdepart" label-width="24%"  style="width: 40%">
      <el-form-item label="科室名称">
        <el-input v-model="drugdepart.depName"></el-input>
      </el-form-item>
      <el-form-item label="该科室门诊收费">
        <el-input type="number" v-model="drugdepart.charge"></el-input>
      </el-form-item>
      <el-form-item label="就诊率">
        <el-input type="number" v-model="drugdepart.visitNum"></el-input>
      </el-form-item>
      <el-form-item label="科室图片">
        <el-upload
          class="upload-demo"
          drag
          action="api/houtai/upload"
          :on-success="handleAvatarSuccess"
          multiple>
          <img v-if=" this.drugdepart.departmentPic" :src=" this.drugdepart.departmentPic" class="avatar">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="科室类型">
        <el-input v-model="drugdepart.departmentType"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .avatar {
    width: 360px;
    height: 178px;
    display: block;
  }
</style>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        drugdepart:{
          depName:'',
          charge:'',
          visitNum:'',
          departmentPic:'',
          departmentType:''
        }
      }
    },
    mounted(){
      this.findall()
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.drugdepart.departmentPic = res;
      },
      onSubmit(formName) {
        axios.post("api/houtai/updatedepart",this.drugdepart).then(res=>{
          this.$msgbox({
            title: '添加成功',
            message: '一条记录已经'+res.data,
            type: 'success',
            position: 'bottom-right'
          });
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      findall(){
          axios.get("api/houtai/findById/"+this.$route.query.id).then(res=>{
              this.drugdepart=res.data
          })
      }
    }
  }
</script>
