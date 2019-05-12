<template>
<div >
  <div class="residual" >
    <chart :options="info"  style="width:600px;height:400px" id="main"></chart>
  </div>
</div>
</template>

<script>
    export default {
        name: "websocket",
        data(){
          return{
            myChart: '',
            systemState: '',
            systemTime:' ',
            option: {
              title: {
                text: '服务器内存占用(实时)'
              },
              tooltip: {},
              legend: {
                data:['内存占用量']
              },
              xAxis: {
                data: ["初始化","初始化","初始化","初始化","初始化","初始化","初始化"]
              },
              yAxis: {},
              series: [
                {
                name: '内存占用',
                type: 'bar',
                data: [0,0,0,0,0,0,0],
                animationDelay: function (idx) {
                  return idx * 100;
                  },
                }],
              animationEasing: 'elasticOut',
              animationDelayUpdate: function (idx) {
                return idx * 5;
              },
              itemStyle:{
                  color:function(params) {
                    var colorList = ['#93DFFF','#8CBFFF','#869FFF','#8080FF', '#7340FF','#6C20FF','#6600FF'];
                    return colorList[params.dataIndex]
                  }
              },
            },

          }
        },
      computed:{
        info: function () {
          return this.option
        }
      },
      methods:{
        initWebpack(){//初始化websocket
          const wsuri = "ws://localhost:2001/websocket/"+localStorage.getItem('token');
          this.websock = new WebSocket(wsuri);//这里面的this都指向vue
          this.websock.onopen = this.websocketopen;
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onclose = this.websocketclose;
          this.websock.onerror = this.websocketerror;
        },
        websocketopen(){//打开
          console.log("WebSocket连接成功")
        },
        websocketonmessage(e){ //数据接收
          let json = JSON.parse(e.data);
          this.systemState = [0,0,0,0,0,0,0];
          this.systemTime=["初始化","初始化","初始化","初始化","初始化","初始化","初始化"];
          for (let i = 0; i < json.length; i++) {
            this.systemState[i] = json[i].nowState;
            this.systemTime[i] = json[i].nowTime;
          }
          this.option.series[0].data = this.systemState;
          this.option.xAxis.data=this.systemTime;
          this.myChart = this.$echarts.init(document.getElementById('main'));

          this.myChart.setOption(this.option);
        },
        websocketclose(){  //关闭
          console.log("WebSocket关闭");
        },
        websocketerror(){  //失败
          console.log("WebSocket连接失败");
        },
      },
      created(){
        this.initWebpack();
      },
    }
</script>

<style scoped>

</style>
