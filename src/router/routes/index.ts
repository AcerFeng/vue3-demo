import { Route } from '~/router/types'

const modules = import.meta.globEager('./modules/**/*.ts')
const routes: Route[] = []

Object.keys(modules).forEach((key) => {
  const module = modules[key].default || {}
  const list = Array.isArray(module) ? [...module] : [module]
  routes.push(...list)
})

const rootRoute: Route = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root',
  },
}

const loginRoute: Route = {
  path: '/login',
  name: 'Login',
  component: () => import('~/views/sys/login/Login.vue'),
  meta: {
    title: 'Login',
  },
}

export const basicRoutes = [
  rootRoute,
  loginRoute,
  ...routes,
]
