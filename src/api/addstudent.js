import request from "@/utils/request"
export function addstudent(params){
    return request({
      url: 'student/selectstudent',
      method: 'get',
      params
    })
  }
  export function tcaddstudent(data){
      return request({
          url: 'student/addstudent',
          method: 'post',
          data
      })
  }