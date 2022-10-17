import React from 'react'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import EquipeService from '../../../services/EquipeService'



const GetAllEquipe = () => {
    const [equipes,setEquipes]=useState([])
    
    const getAlleq = ()=>{
        EquipeService.getAlleq().then(res=>{
            console.log(res)
            setEquipes(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getAlleq()
    
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
                EquipeService.remove(id).then(res=>{
                    getAlleq()
                
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
         <div class="row" style={{marginTop:"150px"}}>
                        <div class="col-md-12">
                            <div class="panel panel-default">

                                <div class="panel-heading">
                                    <h3 class="panel-title">List Of equipes</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th width="100">equipe</th>
                                                    <th width={100}>Membre</th>
                                                   
                                                    <th width="100">description</th>
                            
                                                    
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                               {equipes?.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td><strong>{item.nom}</strong></td>
                                                   
                                                    <td><strong>{item.Membres.map((m)=>{
                                                        return (
                                                            <div>
                                                                <span>{m.firstname}{m.lastname}</span>
                                                            </div>
                                                        )
                                                    })}</strong></td>
                                                    <td>{item.description}</td>
                                                   
                                                    
                                                    <td>
                                                        <Link to={`/updateequpe/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               <Link to="/addequipe" className='btn btn-primary'>
                                                   Add Equipe
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

export default GetAllEquipe