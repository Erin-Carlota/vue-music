import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bang',
    name: 'Bang',
    component: ()=>import('../views/Bang.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component:()=>import('../views/Mine.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: ()=>import('../views/Search.vue')
  },
  {
    path: '/list/:type',
    name: 'List',
    props:true,
    component: ()=>import('../views/List/List.vue')
  },
  {
    path: '/play/:id',
    name: 'Play',
    component:()=>import('../views/Play/Play.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
