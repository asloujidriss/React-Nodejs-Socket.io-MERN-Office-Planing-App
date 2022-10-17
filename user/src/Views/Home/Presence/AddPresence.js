import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import BureauService from '../../../services/BureauService';
import PresenceService from '../../../services/PresenceService';

const AddPresence = () => {
  const userId= JSON.parse(localStorage.getItem('userId'));
    const navigate = useNavigate();
    const [bureaus, setBureaus] = useState([]);
    const [choix_pres, setChoix_pres] = useState([]);
    const [data, setData] = useState({
      Date_pres: "",
      choix_pres: [],
      membre:userId
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
    <div style={{marginTop:"150px"}}>
    <h1>Add Presence</h1>
  
    
       
          
          <form onSubmit={onSubmitHandler} >
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>ADD</strong> Presence
                  </h3>
                 
                </div>

                <div className="panel-body">
                  
                  <input type="text" id="duree" name="Date_pres" onChange={onChangeHandler} /><br />
                  <input type="hidden" id="Date_pres" name="membre"  onChange={onChangeHandler}/><br />
                  <label htmlFor="fname">Lundi</label><br />
                  <select type="text" id="duree" name="choix_pres" onChange={(e) => onChangeHandle(e, 0)}>
                  <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                        <br />
                        <label htmlFor="fname">Mardi</label><br />
                  <select type="text" id="duree" name="choix_pres" onChange={(e) => onChangeHandle(e, 1)}>
                  <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                        <br />
                        <label htmlFor="fname">Mercredi</label><br />
                        <select type="text" id="duree" name="choix_pres" onChange={(e) => onChangeHandle(e, 2)}>
                  <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                        <br />
                        <label htmlFor="fname">Jeudi</label><br />
                        <select type="text" id="duree" name="choix_pres" onChange={(e) => onChangeHandle(e, 3)}>
                  <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                        <br />
                        <label htmlFor="fname">Vendredi</label><br />
                        <select type="text" id="duree" name="choix_pres" onChange={(e) => onChangeHandle(e, 4)}>
                  <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                        <br />
                        <label htmlFor="fname">Samedi</label><br />
                        <select type="text" id="duree" name="choix_pres" onChange={(e) => onChangeHandle(e, 5)}>
                  <option selected>---choix---</option>
                          <option>en ligne</option>
                          <option>present</option>
                        </select>
                        <br />
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
                  {/* <div className="form-group">
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
                  </div> */}
                </div>
                <div className="panel-footer">
              
                  <button className="btn btn-primary pull-right" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
        
       
    
  
 
 
 
 
 
 
     </div>
  )
}

export default AddPresence