import http from "./AxiosContext";

const getAll = () => {
  return http.get("/membre/getall");
};
const get = id => {
  return http.get(`/membre/getbyid/${id}`);
};
const create = data => {
  return http.post("/membre/register", data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/membre/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/membre/delete/${id}`);
};
const findByName = title => {
    return http.get(`membre/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
   
  };