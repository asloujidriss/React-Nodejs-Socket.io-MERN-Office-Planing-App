import http from "./AxiosContext";

const getAll = () => {
  return http.get("/plannifications/getall");
};
const get = id => {
  return http.get(`/plannifications/getbyId/${id}`);
};
// const getmyplanni = id => {
//   return http.get(`/plannifications/getmyplan/${id}`);
// };
const create = data => {
  return http.post("/plannifications/create", data);
};
const update = (id, data) => {
  console.log(data)
  return http.put(`/plannifications/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/plannifications/delete/${id}`);
};
const findByName = title => {
    return http.get(`/plannifications/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
    // getmyplanni
  };