import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import CongeService from '../../../services/CongeService'

const GetMyConge = () => {

    const id = JSON.parse(localStorage.getItem('userId'));
    
    const [conges,setConges]=useState()
    const getbyMem = ()=>{
        CongeService.getbyMem(id).then(res=>{
            console.log(res)
          setConges(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
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
                CongeService.remove(id).then(res=>{
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
        <h3 className="panel-title"><strong>Liste des conges</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}><center>id</center></th>
                <th width={50}>membre</th>
                <th width={50}>duree</th>
                <th width={100}>date_debut</th>
                <th width={100}>date_fin</th>
               
                <th width={100}>etat</th>
                
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {conges?.map((item,index)=>{

                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td>{item.membre?.firstname} {item.membre?.lastname}</td>
                <td><strong>{item.duree}</strong></td>
                <td>{item.date_debut}</td>
                <td>{item.date_fin}</td>
             
                <td>{item.status}</td>
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
    <Link to="/addconge" className='btn btn-primary'>Add conge</Link> 
  </div>
</div>
    </div>
    </div>
  )
}

export default GetMyConge