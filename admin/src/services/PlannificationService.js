import http from "./AxiosContext";

const getAll = () => {
  return http.get("/plannification/getall");
};
const get = id => {
  return http.get(`/plannification/getbyId/${id}`);
};
const create = data => {
  return http.post("/plannification/create", data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/plannification/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/plannification/delete/${id}`);
};
const findByName = title => {
    return http.get(`/plannification/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };