import Vue from 'vue'
import Router from 'vue-router'
import ocr from '../components/page/ocr'
import mainPage from '../components/page/mainPage'
import index from '../components/common/index'
import login from '../components/page/login'

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path:'/',
      redirect: '/mainPage'
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path:'/mainPage',
          component: mainPage,
          name: 'mainPage'
        },
        {
          path: 'ocr',
          component: ocr,
          name: 'ocr'
        }
      ]
    }
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === 'null' || token === '' ||token ===null) {
      next('/login');
    } else {
      next();
    }
  }
});


export default router;
