import http from "./AxiosContext";
const getAll = () => {
  return http.get("/manager/getall");
};
const getAllm = () => {
  return http.get("/membre/getall");
};

const get = id => {
  return http.get(`/manager/getbyId/${id}`);
};
const getm = id => {
  return http.get(`/membre/getbyid/${id}`);
};

const create = data => {
  return http.post("/manager/register", data);
};
const createm = data => {
  return http.post("/membre/register", data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/manager/update/${id}`, data);
};
const updatem = (id, data) => {
  console.log(data)
  return http.put(`/membre/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/manager/delete/${id}`);
};
const removem = id => {
  return http.delete(`/membre/delete/${id}`);
};
const findByName = title => {
    return http.get(`manager/getbyname=${title}`);
  };
  export default {
    getAll,
    getAllm,
    get,
    createm,
    create,
    update,
    remove,
    findByName,
   
  };