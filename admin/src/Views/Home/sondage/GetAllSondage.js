import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import SondageService from '../../../services/SondageService'

const GetAllSondage = () => {
    const [data,setData]=useState([])


    const getAll = ()=>{
        SondageService.getAll().then(res=>{
            console.log(res)
            setData(res.data.data)
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
                SondageService.remove(id).then(res=>{
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
                                    <h3 class="panel-title">List Of sondage</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th width="900">question</th>
                                                    <th width="200">response</th>
                                                    <th width="200">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                           
                                            {data.map((item,index)=>{
                                                    return(
                                                        <>
                                                        {item.questions.map((a,index) =>{
                                                            return(
                                                                <>
                                                                 <tr id="trow_1">
                                                        <td class="text-center">{index}</td>
                                                        <td>{a.question}</td>
                                                        <td>{a.reponse}</td>
                                                        <td>
                                                            <Link to={`/updateequpe/${a._id}`}>
                                                           { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                            </Link> 
                                                             <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                        </td>
                                                    </tr>
                                                                </>
                                                            )
                                                        })}
                                                        </>

                                                       
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

export default GetAllSondage