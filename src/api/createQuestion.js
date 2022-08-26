import request from "@/utils/request"
export function udquestion(data){
    // console.log(data);
    return request({
      url: 'qsTotal/udquestion',
      method: 'post',
      data
    })
  }
  export function addtspaper(data){
    // console.log(data);
    return request({
      url: 'tsPaper/addtspaper',
      method: 'post',
      data
    })
  }