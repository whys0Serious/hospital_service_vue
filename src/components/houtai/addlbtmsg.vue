<template>
  <div>
    <el-form>
      <el-form-item label="轮播图上传">
        <el-upload
          class="upload-demo"
          drag
          action="api/upload/upload"
          :on-success="handleAvatarSuccess"
          multiple>
          <img v-if=" lbt" :src=" lbt" width="360" height="178" class="avatar">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
          return{
            lbt:'',
            imagename:'',
          }
      },
    methods:{
      handleAvatarSuccess(res, file) {
        this.lbt =res;
        axios.get("api/redis/uploadlbtmsg/"+res).then(res=>{
          this.$notify({'title':'上传成功','message':res.data})
        })

      },
    }
  }
</script>
