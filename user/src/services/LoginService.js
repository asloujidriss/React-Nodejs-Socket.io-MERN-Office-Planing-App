import http from "./AxiosContext"

const create = data =>{
    return http.post("/Auth/login",data)
}
const logout = data =>{
    return http.post("/Auth/logout",data)
}
export default {
    create,
    logout
   
}