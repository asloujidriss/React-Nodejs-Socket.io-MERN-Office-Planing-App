import http from "./AxiosContext";
const getAll = () => {
  return http.get("/projet/getall");
};
const get = id => {
  return http.get(`/projet/getbyid/${id}`);
};
const create = data => {
  return http.post("/projet/create",data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/projet/update/${id}`,data);
};
const remove = id => {
  return http.delete(`/projet/delete/${id}`);
};
const findByName = title => {
    return http.get(`/projet/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };