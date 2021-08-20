import { Route } from '~/router/types'

const modules = import.meta.globEager('./modules/**/*.ts')
const routes = []

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

export const routes = [
  rootRoute,
  
]
