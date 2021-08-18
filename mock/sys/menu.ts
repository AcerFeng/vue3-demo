import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/dev-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            name: '菜单1',
          },
          {
            name: '菜单2',
          },
          {
            name: '菜单3',
          },
        ],
        message: 'success',
      }
    },
  },
] as MockMethod[]
