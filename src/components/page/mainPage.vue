<template>
  <div class="main">
    <!--卡片组-->
    <div class="cards" style="padding: 10px 0 0 10px">
    <el-card class="box-card" shadow="always" style="float: left">
      <div class="card-text" style="color: #23b7e5;">
        {{this.totalView}}
      </div>
      <div  class="card-title">
           总访客量
      </div>
    </el-card>
    <el-card class="box-card" shadow="always"style="margin-left: 30px;float: left;background-color: #23B7E5;color: white" >
      <div class="card-text">
        {{this.totalUser}}
      </div>
      <div  class="card-title">
          总用户数
      </div>
    </el-card>
    <div style="clear: left"></div>
    <el-card class="box-card" shadow="always" style="margin-top: 30px;float: left;background-color: #7266BA;color: white">
      <div class="card-text">
          {{this.todayView}}
      </div>
      <div  class="card-title">
          今日访客量
      </div>
    </el-card>
    <el-card class="box-card" shadow="always"style="margin: 30px 0 0 30px;float: left">
      <div class="card-text">
          {{this.appNumber}}
      </div>
      <div  class="card-title">
           App数量
      </div>
    </el-card>
    </div>
    <!--服务器状态-->
    <div id="myChart" :style="{width: '300px', height: '300px'}">

    </div>

  </div>
</template>

<script>
    export default {
        name: "mainPage",
      data (){
          return{
            totalView: '1',
            totalUser: '1',
            todayView: '1',
            appNumber: '2',
          }
      }

    }
</script>

<style scoped>
  .main{
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);;
    padding: 0;
    background-color: #F0F3F4;
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
