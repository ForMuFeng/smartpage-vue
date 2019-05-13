import request from './requests'

export function userlogin(user_name, user_password) {
    return request({
        url: `/user/login/`,
        method: 'post',
        data:{
          user_name,user_password
        }
    })
}
export function allPv() {
  return request({
    url: `/visit/allPV/`,
    method: 'get',
  })
}
export function todayPV(user_name, user_password) {
  return request({
    url: `/visit/todayPV/`,
    method: 'post',
    data:{
      user_name,user_password
    }
  })
}
export function slogout(id) {
  return request({
    url: `/user/slogout/`,
    method: 'post',
    data:{
      id
    }
  })
}
