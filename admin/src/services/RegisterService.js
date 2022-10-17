import http from "./AxiosContext"

const create = data =>{
    return http.post("/ressource/register",data)
}

export default {
    create
}