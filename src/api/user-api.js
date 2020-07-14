


import request from '../utils/http'




//登录 接口
export function logIn(userName,password) {

    const formData = new FormData();

    formData.append("username",userName)
    formData.append("password",password)
    formData.append("rememberMe","false")

    return request.post("/api/pcUser/login",formData)
}




export function userInformation() {
    return request.get("/api/pcUser/login-user/info")
}

// 退出登录
export function logout() {
    return request.get('/api/pcUser/logout')
}