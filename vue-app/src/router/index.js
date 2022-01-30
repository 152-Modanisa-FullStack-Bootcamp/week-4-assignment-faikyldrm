import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from "@/views/MainPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
//  base: process.env.BASE_URL,
  routes
})

export default router
