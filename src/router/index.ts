import { RouteRecordRaw } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import SetupGame from '@/views/SetupGame.vue'
import RoundTurn from '@/views/RoundTurn.vue'
import NotFound from '@/views/NotFound.vue'
import createRouterMatomoTracking from 'brdgm-commons/src/util/router/createRouterMatomoTracking'
import { name, appDeployName } from '@/../package.json'

const LOCALSTORAGE_KEY = `${name}.route`

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/setup',
    name: 'SetupGame',
    component: SetupGame
  },
  {
    path: '/round/:round',
    name: 'RoundTurn',
    component: RoundTurn
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouterMatomoTracking(routes, LOCALSTORAGE_KEY, appDeployName, 'AppHome')