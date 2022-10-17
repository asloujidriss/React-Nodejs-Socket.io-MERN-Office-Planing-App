import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PresenceService from "../../../services/PresenceService";

const GetAllPresence = () => {
  const [presences, setPresences] = useState([]);

  const getAll = () => {
    PresenceService.getAll()
      .then((res) => {
        console.log(res);
        setPresences(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verify = () => {
    PresenceService.verify()
      .then((res) => {
        console.log(res.data);
        if(res.data["persondetected"]!="Unknown") {
           // add Pres
        }
       // alert(res.data["persondetected"]);

        //setPresences(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll();
  }, []);
  const onDelete = (id) => {
    Swal.fire({
      title: "Etes-vous sûr ?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprime-le!",
    }).then((result) => {
      if (result.isConfirmed) {
        PresenceService.remove(id).then((res) => {
          getAll();
        });
        Swal.fire("Supprimé!", "Votre fichier a été supprimé.", "success");
      }
    });
  };
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <a onClick={verify}>Presence</a>
                  </strong>
                </h3>
              </div>
              <div className="panel-body panel-body-table">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-actions">
                    <thead>
                      <tr>
                        <th width={50}>
                          <center>id</center>
                        </th>
                        <th width={100}>Date presence</th>
                        <th width={50}>Membre</th>
                        <th width={50}>bureau</th>
                        <th width={100}>Lundi</th>
                        <th width={100}>Mardi</th>

                        <th width={100}>Mercredi</th>
                        <th width={100}>Jeudi</th>
                        <th width={100}>Vendredi</th>
                        <th width={100}>Samedi</th>
                        <th width={50}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {presences?.map((item, index) => {
                        return (
                          <tr id="trow_1">
                            <td className="text-center">{index}</td>
                            <td>{item.Date_pres}</td>
                            <td>
                              <strong>
                                {item.membre?.firstname} {item.membre?.lastname}
                              </strong>
                            </td>
                            <td>
                              <strong>{item.bureau?.name}</strong>
                            </td>
                            <td>
                          
                                  
                                    <td>{item.choix_pres[0]?.choix}</td>
                                  
                               
                            </td>
                            <td>
                              
                            <td>{item.choix_pres[1]?.choix}</td>
                                  
                                
                            </td>
                            <td>
                            <td>{item.choix_pres[2]?.choix}</td>
                            </td>
                            <td>
                            <td>{item.choix_pres[3]?.choix}</td>
                            </td>
                            <td>
                            <td>{item.choix_pres[4]?.choix}</td>
                            </td>
                            <td>
                            <td>{item.choix_pres[5]?.choix}</td>
                            </td>

                            <td>
                              <button
                                className="btn btn-danger btn-rounded btn-sm"
                                onClick={() => onDelete(item._id)}
                              >
                                <span className="fa fa-times" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllPresence;
