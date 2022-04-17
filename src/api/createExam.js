import request from "@/utils/request"
export function totol(data){
    return request({
      url: `tsPublic/selectexams?${data}`,
      method: 'get',
    })
  }
  export function deletelyExam(data){
      return request({
          url: 'tsPublic/deleteexam',
        method: 'post',
        data
      })
  }