import http from "./AxiosContext";
const getAll = () => {
  return http.get("/conge/getall");
};
const get = id => {
  return http.get(`/conge/getbyid/${id}`);
};
const getbyMem = id => {
  return http.get(`/conge/getbyMem/${id}`);
};
const create = data => {
  return http.post("/conge/create",data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/conge/update/${id}`,data);
};
const remove = id => {
  return http.delete(`/conge/delete/${id}`);
};
const findByName = title => {
    return http.get(`/conge/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    getbyMem,
    create,
    update,
    remove,
    findByName
  };