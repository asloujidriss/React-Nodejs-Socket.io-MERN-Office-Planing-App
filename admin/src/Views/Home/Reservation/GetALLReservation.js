import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import ReservationService from '../../../services/ReservationService'

const GetALLReservation = () => {
    const [reservations, setReservations] = useState([])
const getAll =()=>{
    ReservationService.getAll().then(res=>{
        console.log(res)
        setReservations(res.data.data)
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
        confirmButtonColor: '#3085D6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            ReservationService.remove(id).then(res=>{
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
                                    <h3 class="panel-title">List des reservations</h3>
                                </div>
                                <div class="panel-body panel-body-table">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th>membre</th>
            
                                                    <th width="100">title</th>
                                                    <th width="100"> startdate </th>
                                                    <th width="100"> startend </th>
                                                    <th width="100"> Status </th>
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {reservations.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td><strong>{item.membre?.firstname} {item.membre?.lastname}</strong></td>
                                                    <td>{item.title}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                    <Link to={`/updatereser/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               {/* <Link to="/addcontrainte" className='btn btn-primary'>
                                                   AddContrainte
                                               </Link> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
    </div>
  )
}

export default GetALLReservation