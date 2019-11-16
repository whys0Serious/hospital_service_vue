<template>
  <div id="body">
    <div id="topp">
      <div class="user">
          <img src="../components/static/img/userlogo.jpg" height="120" width="120" />
          <span style="position: absolute;top: 32%;left: 7%;">zhangxiaomi</span>
          <span style="position: absolute;top: 37%;left: 6%;">13772692011</span>
          <span style="position: absolute;top: 42%;left: 9%;">42<span>岁</span></span>
          <span style="position: absolute;top: 47%;left: 9%;">男</span>
      </div>
      <div class="bingli">
        <div class="bingl">
          <a  @click="dialogFormVisible  = true">
          <div class="newdate">
            <p style="font-size: 40px;color: rgba(54,130,144,0.5);font-weight: 700;">06</p>
            <p>2019-10</p>
          </div>
          <div class="bl">
            <p style="position: relative;top: 4%">撞伤伤口感染发烧</p>
            <p style="position: relative;top: 8%;color: #b7b7b7;text-overflow: ellipsis;">意外撞伤后，未及时处理伤口，加上偶感风寒，导致病灶转移至全身，左手处有明显淤青意外撞伤后，未及时处理伤口，意外撞伤后，未及时处理伤口，，</p>
          </div>
          </a>
        </div>
      </div>
      <div class="jiaohao">
        <ul style="list-style-type: none">
          <li>已预约人数：<span>50</span></li>
          <li>剩余排号人数：<span>30</span></li>
        </ul>
      </div>
    </div>
    <div id="fott" >
      <el-button type="primary" >呼叫下一位</el-button>
      <el-button type="success">切换下一位</el-button>
      <el-button type="danger">添加病例</el-button>
      <el-button type="warning">开处方</el-button>
    </div>







    <!--编辑界面-->
    <el-dialog title="病人病历" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="病人名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="就诊医生" :label-width="formLabelWidth">
          <el-input v-model="form.doc_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="病人性别" :label-width="formLabelWidth">
          <el-input v-model="form.userGender" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="就诊门诊" :label-width="formLabelWidth">
          <el-input v-model="form.department" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="疾病名称" :label-width="formLabelWidth">
          <el-input v-model="form.jibingname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="使用的药品" :label-width="formLabelWidth">
          <el-input v-model="form.yaopin" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="医生医嘱" :label-width="formLabelWidth">
          <el-input v-model="form.yizhu" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="药单价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" :label-width="formLabelWidth">
          <el-input v-model="form.data" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
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
      }
    },
    mounted(){

    },
    methods: {

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
