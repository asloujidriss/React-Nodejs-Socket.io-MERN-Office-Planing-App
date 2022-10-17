import http from "./AxiosContext";
const getAllrh = () => {
  return http.get("/ressource/getall");
};
const get = id => {
  return http.get(`/ressource/getbyId/${id}`);
};
const create = data => {
  return http.post("/ressource/register", data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/ressource/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/ressource/delete/${id}`);
};
const findByName = title => {
    return http.get(`/ressource/getbyname=${title}`);
  };
  // const getbyidrh = id => {
  //   return http.get(`/ressource/getbyidrh/${id}`);
  // };
  
  export default {
    getAllrh,
    get,
    create,
    update,
    remove,
    findByName,
    // getbyidrh
  };