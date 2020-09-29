import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import signup from '../components/login/signup'
import Forum from '../components/forum/forum'
import Logout from '../components/login/logout'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import CategoryForm from '../components/category/createCategory'


const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout, name:'logout' },
    { path: '/signup', component: signup },
    { path: '/forum', component: Forum , name:'forum' },
    { path: '/question/:slug', component: Read , name:'read' },
    { path: '/ask', component: Create , name:'create' },
    { path: '/category', component: CategoryForm , name:'category' },

  ]



  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

export default router