import { postForm, postJson } from '../util/http'

export function login(body) {
  return postForm('/login', body)
}

// 获取菜单
export function getMenuList(body) {
  return postJson('/system/sys-menu/leftTree', body)
}
