import { LAYOUT } from '~/router/constant'
import { Route } from '~/router/types'

const sys: Route = {
  path: '/sys',
  name: 'Sys',
  component: LAYOUT,
  // redirect: '/dashboard'
  meta: {
    icon: 'ion:grid-outline',
    title: 'Sys',
  },
  children: [
    {
      path: 'config',
      name: 'Config',
      component: () => import('~/views/sys/config/index.vue'),
      meta: {
        title: 'Sys',
      },
    },
  ],
}

export default sys
