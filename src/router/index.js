import Vue from 'vue'
import VueRouter from 'vue-router'
import routerss from './routes.js'
import NotFound from '@/views/NotFound'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};


Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    redirect: '/index/rank'
  },
  ...routerss,
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "*",
    component: NotFound,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
