<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo"  @select="handleSelect">
  </div>
</template>
<script>
  export default{
      data(){
          return{
            activeIndex:1
          }
      },
      methods:{
        handleSelect(){

        }
      }
  }
</script>
