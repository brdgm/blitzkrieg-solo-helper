import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Setup from '../views/Setup.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
