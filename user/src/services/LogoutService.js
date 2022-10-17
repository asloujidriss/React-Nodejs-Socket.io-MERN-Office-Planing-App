import http from "./AxiosContext"

const logout = data =>{
    return http.post("/Auth/logout",data)
}
export default {
   
    logout
   
}