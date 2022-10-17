import http from "./AxiosContext"

const create = data =>{
    return http.post("/membre/register",data)
}

export default {
    create
}