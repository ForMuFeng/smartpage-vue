<template>
<div>
  {{productinfos}}
</div>
</template>

<script>
    export default {
        name: "websocket",
        data(){
          return{
            productinfos: ''
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
          this.productinfos = JSON.parse(e.data);
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
      }
    }
</script>

<style scoped>

</style>
