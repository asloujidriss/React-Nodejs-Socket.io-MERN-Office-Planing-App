import http from "./AxiosContext";
const getAlleq = () => {
  return http.get("/equipe/getall");
};
const get = id => {
  return http.get(`/equipe/getbyid/${id}`);
};
const create = data => {
  return http.post("/equipe/create",data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/equipe/update/${id}`,data);
};
const remove = id => {
  return http.delete(`/equipe/delete/${id}`);
};
const findByName = title => {
    return http.get(`/equipe/getbyname=${title}`);
  };
  export default {
    getAlleq,
    get,
    create,
    update,
    remove,
    findByName
  };