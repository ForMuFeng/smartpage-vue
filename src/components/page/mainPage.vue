<template>
  <div class="main">
    <!--卡片组-->
    <div class="cards" style="height: 40%;width: 30%;padding: 10px 0 0 10px;float: left">
    <el-card class="box-card" shadow="hover" style="float: left">
      <div class="card-text" style="color: #23b7e5;">
        {{this.totalView}}
      </div>
      <div  class="card-title">
           总访客量(按登录次数计算)
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover"style="margin-left: 30px;float: left;background-color: #23B7E5;color: white" >
      <div class="card-text">
        {{this.nowUser}}
      </div>
      <div  class="card-title">
          实时用户数(需获取数据)
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
      <vstate @getNowNumber="getNumber"></vstate>
    </div>

  </div>
</template>

<script>
  import {allPv,todayPV} from '../../js/admin'
  import sysState from './state'
    export default {
        name: "mainPage",
      data (){
          return{
            totalView: '?',
            nowUser: '?',
            todayView: '?',
            appNumber: '1',
            socketdata: ''
          }
      },
      methods:{
        getNumber(number){
          this.nowUser=number;
        }
      },
      components:{
          vstate:sysState
      },
      created(){
          allPv() .then((response) =>{
             this.totalView=response.data
          });
          todayPV() .then((response) =>{
            this.todayView=response.data
          });
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
