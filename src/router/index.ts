import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Setup from '@/views/Setup.vue'
import Round from '@/views/Round.vue'
import NotFound from '@/views/NotFound.vue'

const LOCALSTORAGE_KEY = process.env.VUE_APP_LOCALSTORAGE_KEY_PREFIX + "route"

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
  },
  {
    path: '/round/:round',
    name: 'Round',
    component: Round
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// store last used route path in local storage
router.afterEach(to => {
  localStorage.setItem(LOCALSTORAGE_KEY, to.fullPath)
})
// redirect to lase used route path
let isFirstTransition = true
router.beforeEach((to, _from, next) => {
  const lastRouteFullPath = localStorage.getItem(LOCALSTORAGE_KEY)
  if (to.name === "Home" && lastRouteFullPath && isFirstTransition) next(lastRouteFullPath)
  else next()
  isFirstTransition = false
})

export default router
