<template>
  <div id="body">
    <div class="welcome">
      <div class="topa">
        <p>welcome!</p>
      </div>
      <div class="footaa">
        <a href="#">
        <div class="car" style="background-color: #1ac9b5" @click="kaishi">
            <img src="../components/static/img/kaishijiuzheng.png" />
            <p>开始坐诊</p>
        </div>
        </a>
        <a href="">
        <div class="car" style="background-color: #7fd0f4">
          <img src="../components/static/img/fabu.png" />
          <p>发布预约</p>
        </div>
        </a>
        <a href="">
        <div class="car" style="background-color: #feaf94">

        </div>
        </a>
        <a href="">
        <div class="car" style="background-color: #feaf94">

        </div>
        </a>
        <a href="">
        <div class="car" style="background-color: #8ce4da">

        </div>
        </a>
        <a href="">
        <div class="car" style="background-color: #7fd0f4">
          <img src="../components/static/img/gerenhzongxin.png" />
          <p>个人中心</p>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{

      }
    },
    methods:{
      kaishi(){
        window.location.href="http://localhost:1100/#/docterback"
      }
    }
  }
</script>

<style>
  #body{
    width: 100%;
    height: 100%;
  }
.welcome{
  width: 50%;
  height: 500px;
  /*background-color: #8cc5ff;*/
  margin-left: 25%;
  margin-top: 4%;
}
  .topa{
    width: 100%;
    height: 100px;
    /*background-color: #13ce66;*/
  }
  .topa p{
    font-size: 30px;
    text-align: center;
    line-height: 130px;
    color: #d4d4d4;
  }
  .footaa{
    width: 100%;
    height: 400px;
    /*background-color: #dd6161;*/
  }
  .car{
    width: 30%;
    height: 180px;
    float: left;
    margin-left: 2%;
    margin-top: 2%;
    /*background-color: #13ce66;*/
  }
  .car:hover{
    position:relative;/*改成相对定位*/
    top:-5px;/*向上挪动5px*/
    box-shadow:0px 5px 10px 0px #999;/*增加阴影效果*/
    transition:all 500ms/*动画过渡*/
  }
  .car img{
    width: 45%;
    height: 85px;
    position: relative;
    top: 30px;
    left: 30%;
  }
  .car p{
    color: white;
    font-weight: bolder;
    font-family: 华文楷体;
    position: relative;
    top: 45px;
    text-align: center;
  }
</style>
