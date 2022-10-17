import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import BureauService from "../../../services/BureauService";
import PresenceService from "../../../services/PresenceService";
import UserService from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

const AddPresence = () => {
  const navigate = useNavigate();
  const [bureaus, setBureaus] = useState([]);
  const [equipes, setEquipes] = useState([]);
  const [membres, setMembres] = useState([]);
  const [choix_pres, setChoix_pres] = useState([]);
  const [data, setData] = useState({
    Date_pres: "",
    choix_pres: [],
  });

  for (let i = 0; i < choix_pres.length; i++) {
    data.choix_pres.push({ choix: "" });
  }

  const onChangeHandle = (e, i) => {
    data.choix_pres[i] = {
      choix: e.target.value,
    };
    setData(data);
  };

  const getAll = () => {
    UserService.getAllm()
      .then((res) => {
        setMembres(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  const getAllb = () => {
    BureauService.getAllb()
      .then((res) => {
        console.log(res);
        setBureaus(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllb();
  }, []);
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // const formdata = new FormData()

    // formdata.append('firstname',data.firstname)
    // formdata.append('lastname',data.lastname)
    // formdata.append('email',data.email)
    // formdata.append('password',data.password)
    // formdata.append('adressL',data.AdressL)

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/getpresence");
        PresenceService.create(data)
          .then((res) => {
            console.log("response=>>>>>>>>", res);
            setData(res.data);
          })
          .catch((err) => {
            console.log("err=>>>>>>>>>", err);
          });
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="page-content-wrap">
        <div className="row">
          <div className="col-md-12">
            <form className="form-horizontal" onSubmit={onSubmitHandler}>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>ADD</strong> Presence
                  </h3>
                  <ul className="panel-controls">
                    <li>
                      <a href="#" className="panel-remove">
                        <span className="fa fa-times"></span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Date presence
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="fa fa-pencil"></span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="Date_pres"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">date_debut</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="date" className="form-control" name="date_debut" onChange={onChangeHandler}/>
                                        </div>                                            
                                      
                                    </div>
                                </div>     
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">date_fin</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="date" className="form-control" name="date_fin" onChange={onChangeHandler}/>
                                        </div>                                            
                                      
                                    </div>
                                </div>  */}

                  {/* <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">etat</label>
                                    <div className="col-md-6 col-xs-12"> 
                                {membres?.map((item,index)=>{
                                                   return (
                                                    <div className="col-1">   
                                                    
                                                    <div class="text-center">{index}</div>
                                                   
                                                    
                                                   
                                                   
     
                                                   
                                                  
                                               
                                                </div>
                                                   ) */}
                  {/* })} */}
                  {/* <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Etat</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="col-1">
                                            
                                            
                                        </div>                                            
                                        
                                    </div>
                                </div>  */}
                  {/* </div>
                                </div>     */}
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Membres
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="membre"
                          onChange={onChangeHandler}
                        >
                          <option selected>---membre---</option>
                          {membres.map((item) => {
                            return (
                              <option key={item._id} value={item._id}>
                                {item.lastname} {item.firstname}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      bureau
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="bureau"
                          onChange={onChangeHandler}
                        >
                          <option selected>---bureau---</option>
                          {bureaus?.map((item) => {
                            return (
                              <option key={item._id} value={item._id}>
                                {item?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Lundi
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="choix_pres"
                          onChange={(e) => onChangeHandle(e, 0)}
                        >
                          <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Mardi
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="choix_pres"
                          onChange={(e) => onChangeHandle(e, 1)}
                        >
                          <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Mercredi
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="choix_pres"
                          onChange={(e) => onChangeHandle(e, 2)}
                        >
                          <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Jeudi
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="choix_pres"
                          onChange={(e) => onChangeHandle(e, 3)}
                        >
                          <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Vendredi
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="choix_pres"
                          onChange={(e) => onChangeHandle(e, 4)}
                        >
                          <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
                      Samedi
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="col-1">
                        <select
                          className="form-control"
                          name="choix_pres"
                          onChange={(e) => onChangeHandle(e, 5)}
                        >
                          <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <button className="btn btn-default">Clear Form</button>
                  <button className="btn btn-primary pull-right" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPresence;
