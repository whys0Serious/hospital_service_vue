<template>
  <div>
    <div class="demo-image__preview" style="float: left"  v-for="url in imagelist" @click="updateimage(url.id)">
        <el-image
          style="width: 200px; height: 200px"
          :src="url.path"
          :preview-src-list="pat1h">
        </el-image>
        <el-upload
          action="api/upload/upload"
          :on-success="handleAvatarSuccess"
          >
          <el-tooltip class="item" effect="dark" content="修改图片"placement="top-start">
            <el-divider><i  class="el-icon-picture" style="font-size: 30px;"></i></el-divider>
          </el-tooltip>
        </el-upload>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import axios from 'axios'
  export default{
    data(){
          return{
              imagelist:[],
              pat1h:[],
               id:'',
      pic:{
        id:'',
        path:''
      }
          }
      },
      mounted(){
       this.querypic()
      },
    methods:{
      updateimage(id){
         this.pic.id=id
      },
      querypic(){
        axios.get("api/houtai/findalllbtmsg").then(res=>{
          this.imagelist=res.data
          for(var i=0;i<res.data.length;i++){
            this.pat1h[i]=res.data[i].path
          }
        })
      },
      handleAvatarSuccess(res, file){
          this.pic.path=res
          axios.post("api/houtai/updateimg",this.pic).then(res=>{
              this.$notify({title:"修改成功",message:res.data})
            this.querypic()
          })
      }
    }
  }
</script>
