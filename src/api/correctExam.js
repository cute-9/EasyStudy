import request from "@/utils/request"

export function RecycleBinExam(params) {
  return request({
    url: 'tsAns/selectstudents',
    method: 'get',
    params
  })
}
