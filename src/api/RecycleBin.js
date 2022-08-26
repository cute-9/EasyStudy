import request from "@/utils/request"

export function RecycleBinExam(num) {
  return request({
    url: `selectbyrecycle/${num}`,
    method: 'get',
  })
}
export function bankbyrecycle(data) {
    return request({
      url: 'bankbyrecycle',
      method: 'post',
      data
    })
  }