import React from 'react'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import BureauService from '../../../services/BureauService'
const GetAllBureau = () => {
    const [bureaus, setBureaus] = useState([])
    const getAllb =()=>{
        BureauService.getAllb().then(res=>{
            console.log(res)
            setBureaus(res.data.data)
    
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {

        getAllb()
       
       }, [])
       const onDelete = (id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                BureauService.remove(id).then(res=>{
                    getAllb()
                }).catch(err=>{
                    console.log(err)
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
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
                                    <h3 class="panel-title">List Of bureaus</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th>name</th>
                                                    <th>Capacite</th>
                                                    <th width="100">placeDisponible</th>
                                                    <th width="100">pourcentagePresence(%)</th>
                                                    
                                                   
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                               {bureaus.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.capacite}</td>
                                                    <td>{item.placeDisponible}</td>
                                                    <td>{item.pourcentagePresence}</td>
                                                  
                                                   
                                                    
                                                    
                                                    <td>
                                                        <Link to={`/updateuser/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               <Link to="/addbureau" className='btn btn-primary'>
                                                   AddUser
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

export default GetAllBureau