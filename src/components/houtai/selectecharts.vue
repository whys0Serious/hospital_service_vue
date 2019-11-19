<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}">
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
        return{
          value:[],
          data22:['处方','复方制剂','非处方'],
        }
      },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '各种类型库存' },
          tooltip: {},
          xAxis: {
            data: this.data22
          },
          yAxis: {},
          series: [{
            name: '药品类型对比',
            type: 'bar',
            data: this.value
          }]
        });
      },
      hello(){

      }
    },
    mounted(){
        axios.get("api/houtai/findtype").then(res=>{
          for (var i=0;i<res.data.length;i++){
            this.value[i]=res.data[i]
            this.drawLine();
          }

        })
    }
  }
</script>
