import { defineComponent } from 'vue'

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface RouteMeta {
  title: string
  icon?: string
}

export interface Route {
  path: string
  name: string
  component?: Component
  meta?: RouteMeta
  children?: Route[]
  props?: Object
  fullPath?: string
  redirect?: string
}
