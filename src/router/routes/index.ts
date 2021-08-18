
const modules = import.meta.globEager('./modules/**/*.ts')
const routes = []

Object.keys(modules).forEach((key) => {
  const module = modules[key].default || {}
  const list = Array.isArray(module) ? [...module] : [module]
  routes.push(...list)
})

const rootRoute = {
  path: '/'
}

export const routes = [

]