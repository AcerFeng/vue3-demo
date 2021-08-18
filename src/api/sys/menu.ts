import request from '~/utils/request'

enum Api {
  GetMenuList = '/getMenuList'
}

export const getMenuList = () => {
  return request.get<any[]>(Api.GetMenuList)
}
