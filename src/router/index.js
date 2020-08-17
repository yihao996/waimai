import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
    // 注册
  {
    path: '/',
    name: 'register',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Login.vue')
  },
  //首页
  {
    path: '/shouye',
    name: 'shouye',
    //首页使用懒加载
    component: () => import( '../views/Shouye.vue')
  },
  //商品
  {
    path: '/goods',
    name: 'goods',
    component: () => import( '../views/Goods.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import( '../views/Add.vue')
  },
  {
    path: '/bianji',
    name: 'bianji',
    component: () => import( '../views/Bianji.vue')
  },
  //后台导航栏
  {
    path: '/back',
    name: 'back',
    component: () => import( '../views/Back.vue'),
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import( '../views/Home.vue')
      },
      {
        path: 'boss',
        name: 'boss',
        //首页使用懒加载
        component: () => import( '../views/Boss.vue')
      }
    ]
  },
  //底部导航栏
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/Nav.vue'),
    children:[
      {
        path: 'shouye',
        name: 'shouye',
        component: () => import( '../views/Shouye.vue')
      },
      {
        path: 'search',
        name: 'search',
        //首页使用懒加载
        component: () => import( '../views/Search.vue')
      },
      {
        path: 'order',
        name: 'order',
        //首页使用懒加载
        component: () => import( '../views/Order.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        //首页使用懒加载
        component: () => import( '../views/Mine.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
