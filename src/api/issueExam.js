import request from "@/utils/request"

export function publicpaper(num,data) {
  return request({
    url: `publicpaper/${num}`,
    method: 'post',
    data
  })
}