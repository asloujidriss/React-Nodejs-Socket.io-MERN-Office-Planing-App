import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import PlannificationService from '../../../services/PlannificationService'

const GetPlannification = () => {
    const [planni, setPlanni] = useState([])




const getAll =()=>{
    PlannificationService.getAll().then(res=>{
        console.log(res)
        setPlanni(res.data.data)

    }).catch(err=>{
        console.log(err)
    })
}


useEffect(() => {

 getAll()

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
            PlannificationService.remove(id).then(res=>{
                getAll()
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

<div>
        <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">

                                <div class="panel-heading">
                                    <h3 class="panel-title">List Of plannifications</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th>TypePlanni</th>
                                                    <th>membre</th>
                                                    
                                                    <th width="200">raison</th>
                                                    <th>status</th>
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                               {planni?.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td><strong>{item.typeplanni}</strong></td>
                                                    <td><strong>{item.membres?.firstname} {item.membres?.lastname}</strong></td>
                                                    <td><strong>{item.raison}</strong></td>
                                                    <td><strong>{item.status}</strong></td>
                                                    
                                                    <td>
                                                        <Link to={`/updateplannification/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               <Link to="/addplanification" className='btn btn-primary'>
                                                   AddPlannification
                                               </Link>
                                              

                                            </tbody>
                                        </table>
                                    </div>                                

                                </div>
                            </div>                                                

                        </div>
                    </div>
    </div>



    </div>
  )
}

export default GetPlannification