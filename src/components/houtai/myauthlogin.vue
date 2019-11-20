<template>
  <div>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton},
    mounted(){
        this. loginauth()
      },
    methods:{
          loginauth(){
            var wlh=window.location.href
            if(wlh.includes("code")){
//        var mm=wlh.substring(0,5)
//           alert(wlh.indexOf("="))
            var code=(wlh.substring(28,48))
              alert(code)
              }else {
                alert("请求不存在")
            }

          }
    }
  }
</script>
