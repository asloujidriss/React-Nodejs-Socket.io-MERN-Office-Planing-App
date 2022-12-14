import http from "./AxiosContext";
const getAll = () => {
  return http.get("/reservation/get-events");
};
const get = id => {
  return http.get(`/reservation/getbyid/${id}`);
};
const getbyMem = id => {
  return http.get(`/reservation/getbyMem/${id}`);
};
const create = data => {
  return http.post("/reservation/create",data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/reservation/update/${id}`,data);
};
const remove = id => {
  return http.delete(`/reservation/delete/${id}`);
};
const findByName = title => {
    return http.get(`/reservation/getbyname=${title}`);
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