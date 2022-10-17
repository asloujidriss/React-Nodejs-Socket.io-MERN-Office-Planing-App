import http from "./AxiosContext";
const getAll = () => {
  return http.get("/tache/getall");
};
const getbyMem = id => {
  return http.get(`/tache/getbyMem/${id}`);
};
const get = id => {
  return http.get(`/tache/getbyid/${id}`);
};
const create = data => {
  return http.post("/tache/create",data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/tache/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/tache/delete/${id}`);
};
const findByName = title => {
    return http.get(`/tache/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
    getbyMem 
  };