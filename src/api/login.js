// login页面的网络请求
import request from "@/utils/request"

export function login(data) {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}