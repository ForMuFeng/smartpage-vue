<template>
  <div class="element">
    <big>登录</big>
    <el-input   v-model="username" class="username"></el-input>
    <el-input   type="password" v-model="password" class="password"></el-input>
    <el-button  @click="login" >登录</el-button>
  </div>

</template>

<script>
    export default {
      name: "login",
      data: function() {
          return {
          username: '',
          password: ''
          }
      },
      methods: {
        login(){
          let param = new URLSearchParams();
          param.append('user_name', this.username);
          param.append('user_password', this.password);
          this.axios.post(this.GLOBAL.url+'/user/login', param)
            .then((response) => {

              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    }
</script>

<style scoped>
.element{
  text-align: center;
  margin: auto;
  width: 500px;
}
  .username{
    margin:20px 0 20px 0;
  }
</style>
