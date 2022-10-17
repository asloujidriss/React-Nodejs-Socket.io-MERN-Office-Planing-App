
import http from "./AxiosContext";
const getAlldocu = () => {
  return http.get("/document/getall");
};
const get = id => {
  return http.get(`/document/getbyid/${id}`);
};
const create = data => {
  return http.post("/document/create",data);
};
const updatedoc = (id, data) => {
  console.log(data)
  return http.put(`/document/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/document/delete/${id}`);
};
const findByName = title => {
    return http.get(`/document/getbyname=${title}`);
  };
  export default {
    getAlldocu,
    get,
    create,
    updatedoc,
    remove,
    findByName
  };