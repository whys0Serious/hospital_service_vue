<template>
  <div id="body">
    <div id="topp">
      <div class="user">
          <img :src="userMsg.userPic" height="120" width="120" />
          <span style="position: absolute;top: 32%;left: 7%;">{{userMsg.userName}}</span>
          <span style="position: absolute;top: 37%;left: 6%;">{{userMsg.userPhone}}</span>
          <span style="position: absolute;top: 42%;left: 9%;">{{userMsg.userAge}}<span>岁</span></span>
          <span style="position: absolute;top: 47%;left: 9%;">{{userMsg.userGender}}</span>
      </div>
      <div class="bingli">
        <div v-for="item in form">
        <div class="bingl">
          <a  @click="showHistory(item.pkMid)">
          <div class="newdate">
            <p style="font-size: 40px;color: rgba(54,130,144,0.5);font-weight: 700;">{{item.gmtCreate}}</p>
            <p>{{item.gmtModified}}</p>
          </div>
          <div class="bl">
            <p style="position: relative;top: 4%">{{item.diseaseName}}</p>
            <p style="position: relative;top: 8%;color: #b7b7b7;text-overflow: ellipsis;">{{item.diseaseInfo}}</p>
          </div>
          </a>
        </div>
        </div>
      </div>
      <div class="jiaohao">
        <ul style="list-style-type: none">
          <li>已预约人数：<span>{{sumNum}}</span></li>
          <li>剩余排号人数：<span>30</span></li>
        </ul>
      </div>
    </div>
    <div id="fott" >
      <el-button type="primary" >呼叫下一位</el-button>
      <el-button type="success" @click="next">切换下一位</el-button>
      <el-button type="danger">添加病例</el-button>
      <el-button type="warning">开处方</el-button>
    </div>

    <!--编辑界面-->
    <el-dialog title="病人病历" :visible.sync="dialogFormVisible">
      <el-form :model="this.history">
        <el-form-item label="就诊医生" :label-width="formLabelWidth">
          <el-input v-model="history.docName" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="就诊门诊" :label-width="formLabelWidth">
          <el-input v-model="history.department" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="疾病名称" :label-width="formLabelWidth">
          <el-input v-model="history.diseaseName" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="使用的药品" :label-width="formLabelWidth">
          <el-input v-model="history.drugName" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="医生医嘱" :label-width="formLabelWidth">
          <el-input v-model="history.docAdvice" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="药单价格" :label-width="formLabelWidth">
          <el-input v-model="history.drugPrice" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" :label-width="formLabelWidth">
          <el-input v-model="history.gmtCreate" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

<!--创建病例-->
    <el-dialog title="创建病例" :visible.sync="FormVisible">
      <el-form :model="newform">
        <el-form-item label="病人名称" :label-width="formLabelWidth">
          <el-input v-model="newform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="就诊医生" :label-width="formLabelWidth">
          <el-input v-model="newform.doc_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="病人性别" :label-width="formLabelWidth">
          <el-input v-model="newform.userGender" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="就诊门诊" :label-width="formLabelWidth">
          <el-input v-model="newform.department" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="疾病名称" :label-width="formLabelWidth">
          <el-input v-model="newform.jibingname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="使用的药品" :label-width="formLabelWidth">
          <el-input v-model="newform.yaopin" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="医生医嘱" :label-width="formLabelWidth">
          <el-input v-model="newform.yizhu" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="药单价格" :label-width="formLabelWidth">
          <el-input v-model="newform.price" autocomplete="off"></el-input>
        </el-form-item>
        <!--记得创建时间-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="FormVisible = false">取 消</el-button>
        <el-button type="primary" @click="FormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        //传进来的病人
        form:{
          id:0,
          name:'杨春荣',
          doc_name:'张奇医生',
          userGender:'男',
          department:'消化门诊',
          jibingname:'感冒', //疾病名称
          yaopin:'安乃静', //使用的药品
          yizhu:'不要吃饭不要喝水',  //医生嘱咐
          price:'20.0',  //药品消费价格
          data:'2019-09-30',  //创建时间
        },
        newform:{
          id:0,
          name:'',
          doc_name:'',
          userGender:'',
          department:'',
          jibingname:'', //疾病名称
          yaopin:'', //使用的药品
          yizhu:'',  //医生嘱咐
          price:'',  //药品消费价格
          // data:'2019-09-30',  //创建时间  由后台创建当前时间
        },
        form:[],
        history:[],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        //编辑界面数据
        editForm: {
          id: 0,
          name: '',
          price: 0,
          desc: '',
          reserve:'',
        },
        doc:{},//医生信息
        num:'',//排号计数
        sumNum:'',//总排号人数
        nowNum:'',//当前剩余人数
        userMsg:''//当前就诊人信息
      }
    },
    mounted(){
      //查询当前第一位排号人信息
      //先获得当前医生信息
      var id= this.$cookie.get("userMsg")
      axios.get("api/hospital-user-server/getUserMsg?id="+id).then(res=>{
       var did=res.data.pkDocid;
       axios.get("api/hospital-registered-server/findDocMsg?did="+did).then(res=>{
          this.doc=res.data
         //获取当前科室所有排号数
         axios.get("api/hospital-alipay-server/showNums?depart="+this.doc.department+"&doc="+this.doc.docName).then(res=>{
           this.sumNum=res.data;
         })
         axios.get("api/hospital-alipay-server/showNumUser?depart="+this.doc.department+"&docName="+this.doc.docName+"&num=1").then(res=>{
           this.userMsg=res.data;
           this.num=1;
           this.query();
         })
        })
      })


    },
    methods: {
      next(){
        this.num+=1;
        alert(this.num);
        axios.get("api/hospital-alipay-server/showNumUser?depart="+this.doc.department+"&docName="+this.doc.docName+"&num="+this.num).then(res=>{
            this.userMsg=res.data;
            this.query();
        })
      },
      query(){//查询当前病人所有病历
        axios.get("api/hospital-registered-server/showHistory?id="+this.userMsg.pkUid).then(res=>{
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].gmtCreate!=null){
              var d=new Date(res.data[i].gmtCreate);
//              res.data[i].gmtCreate=d.getFullYear() + '-' + (d.getMonth() + 1)
//                + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
              res.data[i].gmtModified=d.getFullYear()+"-"+(d.getMonth()+1)
              res.data[i].gmtCreate=d.getDate();
            }
          }
          this.form=res.data;
        })
      },
      showHistory(i){//查询每一条具体病历详情；
          axios.get("api/hospital-registered-server/showOneHistory?mid="+i).then(res=>{
            var d=new Date(res.data.gmtCreate);
            res.data.gmtCreate=d.getFullYear() + '-' + (d.getMonth() + 1)
                + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
              this.history=res.data;
          })
        this.dialogFormVisible= true;
      }
    }
  }

</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#body{
  width: 100%;
  height: 100%;
}
  #topp{
    width: 100%;
    height: 580px;
    /*background: #dd6161;*/
  }
#fott{
  width: 100%;
  height: 55px;
  /*background: #dd95aa;*/
  text-align: center;
}
  .user{
    float: left;
    width: 20%;
    height: 580px;
    /*background: #13ce66;*/
  }
  .user img{
    position: relative;
    top: 10%;
    left: 30%;
  }

.bingli{
  float: left;
  width: 60%;
  height: 580px;
  /*background: #ce752b;*/

}
  .jiaohao{
    float: left;
    width: 20%;
    height: 580px;
    background: #41b7ce;
  }
  .bingl{
    margin-top: 3%;
    width: 90%;
    height: 80px;
    background-color: #c9e5ff;
  }
  .newdate{
    float: left;
    width: 15%;
    height: 100%;
    /*background-color: #dd6161;*/
  }
.newdate p{
  text-align: center;
  position: relative;
  top: 1%;
}
  .bl{
    float: rightr;
    width: 100%;
    /*background-color: #14dd20;*/
    height: 100%;
  }
  .jiaohao ul li{
    position: relative;
    top: 200px;
    margin-top: 5%;
    left: 30%;
  }
.el-form-item {
  margin-bottom: 5px;
}
.el-input__inner {

  width: 72%;
}
</style>
