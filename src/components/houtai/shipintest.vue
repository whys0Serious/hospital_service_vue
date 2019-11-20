<template>
  <div>
    <video  id="media" style="width: 500px" controls="controls" autoplay="autoplay">
      <source id="myvideo" src=""  />
    </video>
    <el-button @click="xiayige">下一个</el-button>
  </div>
</template>
<script>
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton},
    data(){
          return{
            srcmyq:"./hello.mp4"
          }
      },
    methods:{
      xiayige(){
          document.getElementById("myvideo").src="./hello.mp4"
          document.getElementById("media").play()
      }
    }
  }
</script>
