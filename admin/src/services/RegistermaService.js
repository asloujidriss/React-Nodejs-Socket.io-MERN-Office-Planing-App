import http from "./AxiosContext"

const create = data =>{
    return http.post("/manager/register",data)
}

export default {
    create
}