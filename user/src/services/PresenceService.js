import http from "./AxiosContext";
import axios from "axios"

const getAll = () => {
  return http.get("/presence/getAll");
};
const get = (id) => {
  return http.get(`/presence/getbyid/${id}`);
};
const verify = () => {
  return axios.get(`http://127.0.0.1:5000/feed`);
};
const create = (data) => {
  return http.post("/presence/create", data);
};
const update = (id, data) => {
  console.log(data);
  return http.put(`/presence/update/${id}`, data);
};
const remove = (id) => {
  return http.delete(`/presence/deletebyid/${id}`);
};
const findByName = (capacite) => {
  return http.get(`/presence/getbyname=${capacite}`);
};
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
  verify,
};
