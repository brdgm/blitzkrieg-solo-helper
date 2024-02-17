import { RouteRecordRaw } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import SetupGame from '@/views/SetupGame.vue'
import RoundTurn from '@/views/RoundTurn.vue'
import NotFound from '@/views/NotFound.vue'
import createRouter from 'brdgm-commons/src/util/router/createRouter'
import { name, appDeployName } from '@/../package.json'

declare let _paq: any;  // eslint-disable-line @typescript-eslint/no-explicit-any

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

const router = createRouter(routes, LOCALSTORAGE_KEY, 'AppHome')
router.afterEach(to => {
  if (_paq) {
    _paq.push(['setCustomUrl', `/${appDeployName}${to.fullPath}`]);
    _paq.push(['trackPageView']);
  }
})
export default router