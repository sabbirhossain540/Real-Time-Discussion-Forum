import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import signup from '../components/login/signup'


const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: signup },
  ]



  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

export default router