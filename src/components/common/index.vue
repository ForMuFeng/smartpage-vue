<template>
  <div class="index">
    <el-container>
      <el-aside class="aside" width="13%">
        <left></left>
      </el-aside>
      <el-container>
        <el-header class="header" height="10%">
          <div style="width: 100%;height: 100%"><img src="../../assets/SmartPage.jpg" style="width: 25%;height: 100%"></div>
        </el-header>
        <el-main class="main" width="85%">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import left from './left.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods :{
    check(){
      console.log(localStorage.getItem('token'));
    },
    deletes(){
      localStorage.removeItem('token');

    }
  },
  components: {
    left
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index{
  width: 100%;
  height: 100%;
  background-color: white;
}
  .header{
    background-color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
    font-size:40px;
    height: 100%;



  }
  .aside{
    margin: 0;
    height: 100vh;
    background-color: #1C2B36;
  }
.main{
 padding: 3px 0 0 0;
}
</style>
