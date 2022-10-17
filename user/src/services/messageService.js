import http from "./AxiosContext";

const create = data => {
    return http.post("/messages",data);
  };
const get = (id) => {
  return http.get(`/messages/${id}`);
};

  export default {
    get, 
    create,

  };