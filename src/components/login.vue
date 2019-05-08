<template>
  <div class="element">
    <big>登录</big><br/>
    <small> 用户名：root ，密码：root</small>
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
              if(response.data.name!=null){
                localStorage.setItem('name',response.data.name);
                localStorage.setItem('token',response.data.mdf);
                this.$router.push('/ocr');
              }else {
                this.$notify({
                  title: '登录失败',
                  message: '用户名或密码错误',
                  type: 'warning'
                });
              }
            })
            .catch(function (error) {
              this.$notify({
                title: '登录出错',
                message: '发生错误！',
                type: 'error'
              });
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
