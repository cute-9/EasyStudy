import request from "@/utils/request"

export function selectexams(params) {
  return request({
    url: 'tsPublic/selectexams',
    method: 'get',
 params
  })
}