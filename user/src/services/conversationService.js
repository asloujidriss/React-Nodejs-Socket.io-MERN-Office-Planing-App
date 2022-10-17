import http from "./AxiosContext";

const create = data => {
    return http.post("/conversations",data);
  };
const get = (id) => {
  return http.get(`/conversations/${id}`);
};

const gettwo = (id) => {
  return http.get(`/conversations/find/${id}/${id}`);
};

  export default {
    get, 
    create,
    gettwo
  };