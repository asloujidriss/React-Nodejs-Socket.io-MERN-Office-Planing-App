import http from "./AxiosContext";
const getAll = () => {
  return http.get("/sondage/getall");
};
// const getbyMem = id => {
//   return http.get(`/sondage/getbyMem/${id}`);
// };
const get = id => {
  return http.get(`/sondage/getbyid/${id}`);
};
const create = data => {
  return http.post("/sondage/create",data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/sondage/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/sondage/delete/${id}`);
};
const findByName = title => {
    return http.get(`/sondage/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
    // getbyMem 
  };