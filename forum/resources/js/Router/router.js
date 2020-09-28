import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import signup from '../components/login/signup'
import Forum from '../components/forum/forum'
import Logout from '../components/login/logout'
import Read from '../components/forum/read'


const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout, name:'logout' },
    { path: '/signup', component: signup },
    { path: '/forum', component: Forum , name:'forum' },
    { path: '/question/:slug', component: Read , name:'read' },
  ]



  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

export default router