<template>
  <div class="element">
    <big>登录</big><br/>
    <!--<small>登录信息保存在本地，除非更换账号否则不需要再次登录</small><br/>-->
    <small> 用户名：root ，密码：root</small><br/>
    <el-input   v-model="username" class="username"></el-input>
    <el-input   type="password" v-model="password" class="password"></el-input>
    <el-button  @click="onlogin" >登录</el-button>
  </div>

</template>

<script>
  import {userlogin} from '../../js/admin'
  import ElementUI from 'element-ui';
    export default {
      name: "login",
      data: function() {
          return {
          username: '',
          password: ''
          }
      },
      methods: {
        onlogin(){
          userlogin(this.username,this.password)
            .then((response) => {
              if(response.data.message ==='success'){
                sessionStorage.setItem('name',response.data.username);
                sessionStorage.setItem('admintoken',response.data.admintoken);
                this.$router.push('/');
                ElementUI.Message({
                  message: '登陆成功',
                  type: 'success'
                });
              }else {
                ElementUI.Message({
                  message: '登陆失败，用户名或密码错误',
                  type: 'warning'
                });
              }
            })
            .catch(function (error) {
              console.log(error.message)
              ElementUI.Message({
                message: '发生异常错误！',
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
