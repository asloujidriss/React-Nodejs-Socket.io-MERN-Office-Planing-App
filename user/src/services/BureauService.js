import http from "./AxiosContext";

const getAllb = () => {
  return http.get("/bureau/getall");
};
const get = id => {
    return http.get(`/bureau/getbyid/${id}`);
  };
  const create = data => {
    return http.post("/bureau/create",data);
  };
  const update = (id, data) => {
    console.log(data)
    return http.put(`/bureau/update/${id}`, data);
  };
  const remove = id => {
    return http.delete(`/bureau/delete/${id}`);
  };
  const findByName = capacite => {
      return http.get(`/bureau/getbyname=${capacite}`);
    };
    export default {
      getAllb,
      get,
      create,
      update,
      remove,
      findByName
    };