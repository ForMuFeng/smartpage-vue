<template>
  <div class="index">
    <el-container>
      <el-aside class="aside" width="13%">
        <left></left>
      </el-aside>
      <el-container>
        <el-header class="header" height="7%">
          <div style="padding-top: 10px">SmartPage</div>
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
  background-color: #eeeeee;
}
  .header{
    background-color: white;
    box-shadow: 0 0 3px 0 ;
    font:20px Extra large;
    height: 100%;

  }
  .aside{
    margin: 0;
    height: 100vh;
    background-color: #FFFFFF;
    box-shadow: 0 0 4px 0 black ;
  }
.main{

}
</style>
