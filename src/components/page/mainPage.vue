<template>
  <div class="main">
    <!--卡片组-->
    <div class="cards" style="height: 40%;width: 30%;padding: 10px 0 0 10px;float: left">
    <el-card class="box-card" shadow="hover" style="float: left">
      <div class="card-text" style="color: #23b7e5;">
        {{this.totalView}}
      </div>
      <div  class="card-title">
           总访客量
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover"style="margin-left: 30px;float: left;background-color: #23B7E5;color: white" >
      <div class="card-text">
        {{this.totalUser}}
      </div>
      <div  class="card-title">
          总用户数
      </div>
    </el-card>
    <div style="clear: left"></div>
    <el-card class="box-card" shadow="hover" style="margin-top: 30px;float: left;background-color: #7266BA;color: white">
      <div class="card-text">
          {{this.todayView}}
      </div>
      <div  class="card-title">
          今日访客量
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover"style="margin: 30px 0 0 30px;float: left">
      <div class="card-text">
          {{this.appNumber}}
      </div>
      <div  class="card-title">
           App数量
      </div>
    </el-card>
    </div>
    <!--服务器状态-->
    <div id="myChart" style="float: left;margin-left: 40px">
      <vstate></vstate>
    </div>

  </div>
</template>

<script>
  import sysState from './state'
    export default {
        name: "mainPage",
      data (){
          return{
            totalView: '1',
            totalUser: '1',
            todayView: '1',
            appNumber: '2',
            socketdata: ''
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
          console.log(e)
          this.socketdata = JSON.parse(e.data);
        },
        websocketclose(){  //关闭
          console.log("WebSocket关闭");
        },
        websocketerror(){  //失败
          console.log("WebSocket连接失败");
        },
      },
      components:{
          vstate:sysState
      }

    }
</script>

<style scoped>
  .main{
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);;
    padding: 30px;
  }
.box-card {
  width: 220px;
  height: 130px;
}
  .card-title{
    color: #d6d3e6;
    font-size: 13px;
  }
  .card-text{
    font-size: 36px;
  }
</style>
