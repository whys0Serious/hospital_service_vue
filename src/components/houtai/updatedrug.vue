<template>
  <div>
    <el-form :model="drugmsg"  label-width="10%" class="demo-drugmsg">
      <el-form-item label="药品名称" prop="">
        <el-input v-model="drugmsg.drugName" style="width: 30%" placeholder="请输入药品名称"></el-input>
      </el-form-item>
      <el-form-item label="药品适应症" prop="">
        <el-input v-model="drugmsg.drugSyz" style="width: 30%"  placeholder="请输入药品适应症"></el-input>
      </el-form-item>
      <el-form-item label="药品生产企业" prop="">
        <el-input v-model="drugmsg.drugManu" style="width: 30%"  placeholder="请输入药品生产企业"></el-input>
      </el-form-item>
      <el-form-item label="药品参考价格" prop="">
        <el-input-number v-model="drugmsg.drugPrice" type="number" style="width: 30%"  placeholder="请输入药品参考价格"></el-input-number>
      </el-form-item>
      <el-form-item label="药品类型" prop="">
        <el-select v-model="itemvalue" placeholder="请选择药品类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.itemvalue">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="药品规格型号" prop="">
        <el-input v-model="drugmsg.drugGgxh" style="width: 30%"  placeholder="请输入药品规格型号"></el-input>
      </el-form-item>
      <el-form-item label="药品用法用量" prop="">
        <el-input v-model="drugmsg.drugYfyl" style="width: 30%"  placeholder="请输入药品用法用量"></el-input>
      </el-form-item>
      <el-form-item label="药品图片" prop="">
        <el-upload
          class="upload-demo"
          drag
          action="api/hospital-user-server/uploadPic"
          :on-success="handleAvatarSuccess"
          multiple>
          <img v-if=" this.drugmsg.drugPic" :src=" this.drugmsg.drugPic" class="avatar">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
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
          itemvalue:'',
          options:[
            {value: '处方',
              label: '处方'},
            {value: '非处方',
              label: '非处方'},
            {value: '复方制剂',
              label: '复方制剂'}
          ],
          drugmsg: {
            pkDrugid:'',
            drugName: '',
            drugSyz: '',
            drugManu: '',
            drugPrice: '',
            drugType: '',
            drugGgxh: '',
            drugPic: '',
            drugYfyl:'',
          },
        }
     },
   mounted(){
         this.selectdrugbyid()

   },
   methods:{
     handleAvatarSuccess(res, file) {
       this.drugmsg.drugPic =res;
     },
       selectdrugbyid(){
         axios.get("api/houtai/selectBydId/"+this.$route.query.id)  .then(res=>{
             this.drugmsg=res.data
           this.itemvalue=res.data.drugType
         })
       },
     onSubmit(formName) {
       axios.post("api/houtai/updatedrug",this.drugmsg).then(res=>{
         this.$notify({
           title: '添加成功',
           message: '一条记录已经修改',
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
