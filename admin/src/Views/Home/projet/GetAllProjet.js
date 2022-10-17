import React from 'react'
import ProjetService from '../../../services/ProjetService'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const GetAllProjet = () => {
    const [projets,setProjets]=useState()
    const getAll = ()=>{
        ProjetService.getAll().then(res=>{
            console.log(res)
            setProjets(res.data.data)
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
                ProjetService.remove(id).then(res=>{
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
    <div>
        <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">

                                <div class="panel-heading">
                                    <h3 class="panel-title">List Of projets</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th width="100">titre</th>
                                                   
                                                    <th width="100">description</th>
                                                    <th width="100">date_debut</th>
                                                    <th width="100">date_fin</th>
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                               {projets?.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td><strong>{item.titre}</strong></td>
                                                    
                                                    <td>{item.description}</td>
                                                    <td>{item.date_debut}</td>
                                                    <td>{item.date_fin}</td>
                                                    
                                                    <td>
                                                        <Link to={`/updateprojet/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               <Link to="/addprojet" className='btn btn-primary'>
                                                   Add projet
                                               </Link>
                                              

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

export default GetAllProjet