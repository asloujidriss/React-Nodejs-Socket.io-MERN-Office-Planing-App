import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import reservationService from '../../services/reservationService';

export const GetMyreservation = () => {
//  const status = props.Accepter;

    const id = JSON.parse(localStorage.getItem('userId'));
    
    const [reservations,setReservations]=useState([])
    const getbyMem = ()=>{
        reservationService.getbyMem(id).then(res=>{
            console.log(res)
            setReservations(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    const verify = () => {
    reservationService.verify()
        .then((res) => {
          console.log(res.data);
  
          alert(res.data["persondetected"]);
  
          //setPresences(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    useEffect (()=>{
      getbyMem()
    
    },[])

    const onDelete = (id)=>{
        Swal.fire({
            title: 'Etes-vous sûr ?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprime-le!'
          }).then((result) => {
            if (result.isConfirmed) {
                reservationService.remove(id).then(res=>{
                  getbyMem()
                
              })
              Swal.fire(
                'Supprimé!',
                'Votre fichier a été supprimé.',
                'success'
              )
            }
          })
        }
  return (
    <div>
  
  <div style={{marginTop:"150px"}}>
             <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
      
        <h3 className="panel-title"><strong>Liste des reservations</strong></h3>
      </div>
      <a onClick={verify}>Presence</a>
     

      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}><center>id</center></th>
                <th width={50}>membre</th>
                <th width={50}>title</th>
                <th width={100}>startdate</th>
                <th width={100}>enddate</th>
                <th width={100}>personne</th>
                <th width={100}>description</th>
                <th width="200">etat</th>
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {reservations?.map((item,index)=>{
           
                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td>{item.membre?.firstname} {item.membre?.lastname}</td>
                <td><strong>{item.title}</strong></td>
                <td>{item.startdate}</td>
                <td>{item.enddate}</td>
                <td>{item.persondetected}</td>
                <td>{item.description}</td>
                
                 <td>{ 

                       <>
                         
                         {item.status === "Accepter"
                ? 
                  <Link to="/">
                    <button type="button" class="btn btn-primary">add reservation</button>
                  </Link> 
                : item.status === "Refuser"
                ? "Refuser"
                : "en attente"
                }
                        </>
                      }
                   
                  </td>
                   
                  
                  
              
                <td>
                  
                  <Link to = {`/updateconge/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                  </Link>

                  <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
                </td>
              </tr>
              )
              }
              )}
                                                   
            </tbody>
          </table>
        </div>                                
      </div>
    </div> 
    {/* <Link to="/addconge" className='btn btn-primary'>Add conge</Link>  */}
  </div>
</div>
    </div>



    </div>
  )
}
