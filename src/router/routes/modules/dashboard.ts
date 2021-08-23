import { LAYOUT } from '~/router/constant'
import { Route } from '~/router/types'

const dashboard: Route = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/test',
  meta: {
    icon: 'ion:grid-outline',
    title: 'DashBoard',
  },
  children: [
    {
      path: 'test',
      name: 'TestDashboard',
      component: () => import('~/views/dashboard/test/index.vue'),
      meta: {
        title: 'Test',
      },
    },
  ],
}

export default dashboard
