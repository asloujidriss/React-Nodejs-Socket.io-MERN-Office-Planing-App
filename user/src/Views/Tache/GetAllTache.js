import React from 'react'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import TacheService from '../../services/TacheService'

export const GetAllTache = () => {
    const [taches,setTaches]=useState([])
   
    const getAll = ()=>{
        TacheService.getAll().then(res=>{
            console.log(res)
            setTaches(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getAll()
    
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
                TacheService.remove(id).then(res=>{
                    getAll()
                
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
    <div style={{marginTop:"150px"}}>
           <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title"><strong>Liste des taches</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}><center>id</center></th>
                <th width={50}>titre</th>
                <th width={100}>Membre</th>
                <th width={100}>etat</th>
                <th width={100}>description</th>
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {taches?.map((item,index)=>{

                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td><strong>{item.titre}</strong></td>
                <td><strong>{item.membre?.firstname}{item.membre?.lastname}</strong></td>
                <td>{item.etat}</td>
                <td>{item.description}</td>
                <td>
                  
                  <Link to = {`/updatetache/${item._id}`}>
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
   
  </div>
</div>

    </div>
  )
}
