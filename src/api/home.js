// home页面的网络请求
import request from "@/utils/request"

export function addProject(data) {
  return request({
    url: 'project/addproject',
    method: 'post',
    data
  })
}
export function selectBYtcid(data){
  // var token=token
  return request({
    url: `project/selectbytcid?${data}`,
    method: 'get',
  })
}
export function deletetly(data){
  // console.log(data);
  return request({
    url: 'project/deletebyid',
    method: 'post',
    data
  })
}
