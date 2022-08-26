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
  export function selectcallpaper(data) {
return request({
    url: 'selectallpaper',
    method: 'post',
    data
})
  }
  export function selectquestion(data) {
      return request({
          url: 'qsTotal/selectquestion',
          method: 'post',
          data
      })
  }
  export function selecttype() {
    return request({
        url: 'qsTotal/selecttype',
        method: 'get',
    })
}
export function selectlevel() {
  return request({
      url: 'qsTotal/selectlevel',
      method: 'get',
  })
}
export function examName(data){
  return request({
    url: 'tsPaper/updatetsname',
    method: 'post',
    data    
  })
}
export function sealExam(data){
  return request({
    url: 'sealpaper',
    method: 'post',
    data    
  })
}
export function  delelePaper(data){
return request({
  url:'deletepaper',
  method: 'post',
  data
})
}
export function  nosealExamPaper(data){
  return request({
    url:'nosealpaper',
    method: 'post',
    data
  })
  }
  export function  deleteQuestion(data){
    return request({
      url:'qsTotal/deletequestion',
      method: 'post',
      data
    })
    }