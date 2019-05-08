// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global_  from './Global';
import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.GLOBAL = global_ ;
Vue.prototype.axios = axios;
/* eslint-disable no-new */

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('ms_username');
//   if (!role && to.path !== '/login') {
//     next('/login');
//   }
// }),
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
