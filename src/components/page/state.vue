<template>
<div >
  <div class="residual" >
    <el-button type="primary" plain @click="webSocketInit" :loading="loading" v-if="ifshow1">{{text}}</el-button>
    <el-button type="primary" plain @click="myclose" v-if="ifshow2">关闭连接</el-button>
    <chart :options="info"  style="width:600px;height:400px" id="main"></chart>
  </div>
</div>
</template>

<script>
  import {slogout} from '../../js/admin'
  import ElementUI from 'element-ui';
  export default {
        name: "websocket",
        data(){
          return{
            websocket :'',
            ifshow1: true,
            ifshow2: false,
            state:false,
            text: '获取数据',
            loading: false,
            number:' ',
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
        webSocketInit(){//初始化websocket
          this.loading=true;
          this.text='载入中';
          const wsuri = this.GLOBAL.wurl+"/websocket/"+sessionStorage.getItem('admintoken');
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
          if(this.state===false){
            this.state=true;
            this.loading=false;
            this.ifshow1=false;
            this.ifshow2 = true;
            ElementUI.Message({
              message: '数据加载成功',
              type: 'success'
            });
          }
          let json = JSON.parse(e.data);
          this.number=json[0].getNowNumber;
          this.systemState = [0,0,0,0,0,0,0];
          this.$emit('getNowNumber',this.number);
          this.systemTime=["初始化","初始化","初始化","初始化","初始化","初始化","初始化"];
          for (let i = 0; i < json[1].length; i++) {
            this.systemState[i] = json[1][i].nowState;
            this.systemTime[i] = json[1][i].nowTime;
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
        myclose(){
          //恢复到初始状态
          this.systemState = [0,0,0,0,0,0,0];
          this.systemTime=["初始化","初始化","初始化","初始化","初始化","初始化","初始化"];
          this.option.xAxis.data=this.systemTime;
          this.option.series[0].data = this.systemState;
          this.$emit('getNowNumber','?');
          this.myChart = this.$echarts.init(document.getElementById('main'));
          this.myChart.setOption(this.option);
          this.ifshow1=true;
          this.ifshow2=false;
          this.state=false;
          this.text='获取数据';
          slogout(sessionStorage.getItem('admintoken')) .then((response) =>{
            console.log(response.data);
          });
        }
      },
    }
</script>

<style scoped>

</style>
