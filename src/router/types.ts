import { defineComponent } from 'vue'

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface IRouteMeta {
  title: string
}

export interface IRoute {
  name: string
  meta: IRouteMeta
  component: Component
  children: IRoute[]
  // props?:
}
