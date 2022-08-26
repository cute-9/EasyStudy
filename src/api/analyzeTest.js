import request from "@/utils/request"

export function getData() {
  return request({
    url: '/analyze/showallcard',
    method: 'get'
  })
}

export function ascendingData(data) {
    return request({
      url: '/analyze/gradeup',
      method: 'post',
      data
    })
  }

export function DescendingData(data) {
    return request({
      url: '/analyze/gradedown',
      method: 'post',
      data
    })
  }

export function searchNameData(data) {
    return request({
      url: `/analyze/showcardbyname?stuName=${data}`,
      method: 'get'
    })
  }

export function searchTestData(data) {
    return request({
      url: `/analyze/showcardbyTs?tsName=${data}`,
      method: 'get'
    })
  }

export function exportResult(data) {
    return request({
        url: '/analyze/export',
        method: 'post',
        data,
        responseType:'blob'
    })
}