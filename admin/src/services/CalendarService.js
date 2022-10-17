// import http from "./AxiosContext";
// import moment from "moment";
// const create= data => {
//     return http.post("/calendar/create-event",data.event);
//   };
//   const getAll = (data) => {
//     return http.get("/calendar/get-events");
//   };
//   const getbyMem = (id,data) => {
//     return http.get("/calendar/getbyMem",`${id}`);
//   };
//   export default {
    
//     create,
//     getAll,
//     getbyMem
    
//   };
import http from "./AxiosContext";
import moment from "moment";
const create= data => {
    return http.post("/calendar/create-event",data.event);
  };
  const getAll = (data) => {
    return http.get("/calendar/get-events");
  };
  export default {
    
    create,
    getAll
    
  };