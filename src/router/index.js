import Vue from 'vue'
import VueRouter from 'vue-router'
import NaverCareers from '../views/NaverCareers'

Vue.use(VueRouter);

const routes = [
 
  {
    path: '/',
    name: 'NaverCareers', 
    component: NaverCareers
  },
  // {
  //   path: '/',
  //   name: 'NaverCareers', 
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/NaverCareers.vue')
  // },
  {
    path: '/People',
    name: 'People',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
