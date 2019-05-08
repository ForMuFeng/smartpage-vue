import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ocr from '@/components/ocr'
import login from '@/components/login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ocr',
      name: 'ocr',
      component: ocr
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
