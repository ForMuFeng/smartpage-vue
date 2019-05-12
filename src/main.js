// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global_  from './Global';
import axios from 'axios';
import eCharts from 'vue-echarts';
import echarts from 'echarts';
import 'echarts'
Vue.component('chart', eCharts);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(eCharts);
Vue.use(echarts);
Vue.prototype.$echarts = echarts;
Vue.prototype.GLOBAL = global_ ;
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
