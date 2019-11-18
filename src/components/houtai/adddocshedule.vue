<template>
  <div>
    <el-form :model="docschedule" label-width="20%" style="width: 40%">
      <el-form-item label="医生姓名">
        <el-select  v-model="docschedule.docName" placeholder="请输入医生姓名">
          <el-option v-for="(d,i) in names"  :value="d" :label="d"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动科室" >
        <el-select  v-model="docschedule.depart" placeholder="请选择医生所在科室">
          <el-option v-for="(d,i) in docschedule.department"  :value="d" :label="d"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择星期">
        <el-checkbox-group v-model="docschedule.work_time">
          <el-checkbox label="星期一" name="work_time"></el-checkbox>
          <el-checkbox label="星期二" name="work_time"></el-checkbox>
          <el-checkbox label="星期三" name="work_time"></el-checkbox>
          <el-checkbox label="星期四" name="work_time"></el-checkbox>
          <el-checkbox label="星期五" name="work_time"></el-checkbox>
          <el-checkbox label="星期六" name="work_time"></el-checkbox>
          <el-checkbox label="星期七" name="work_time"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="上班时间">
        <el-checkbox-group v-model="docschedule.week">
          <el-checkbox label="上午" name="week"></el-checkbox>
          <el-checkbox label="下午" name="week"></el-checkbox>
          <el-checkbox label="晚上" name="week"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
          names:[],
        docschedule:{
            depart:'',
          docName:'',//医生姓名
          department:[],//科室
          work_time:[],//星期（格式：星期一 到星期日）
          week:[],//工作时段（格式：上午下午晚上）
        }
      }
    },
    mounted(){
      this.finddepart()
    },
    methods:{
      yzname(){
        axios.get("api/houtai/findnamesdocmsg").then(res=>{
            this.names=res.data
        })
      },
        finddepart(){
          axios.get("api/houtai/findnamesdoc").then(res=>{
              this.docschedule.department=res.data
          })
        },
      onSubmit(formName) {
        axios.post("api/houtai/insertdocse",{'department':this.docschedule.depart,'docName':this.docschedule.docName,'workTime': this.docschedule.work_time.join(','),'week': this.docschedule.week.join(',')}).then(res=>{
          this.$notify({
            title: '添加成功',
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
