import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserService from '../../services/UserService'

const GetAllUser = () => {
    const [data, setData] = useState({})
    const [image,setImage] = useState("")
    const [users, setUsers] = useState([])
    const getAll =()=>{
        UserService.getAll().then(res=>{
            console.log(res)
            setUsers(res.data.data)
    
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
                UserService.remove(id).then(res=>{
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
    <div style={{marginTop:"150px"}}>
         <div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">

                                <div class="panel-heading">
                                    <h3 class="panel-title">List Of users</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">id</th>
                                                    <th width="100">Firstname</th>
                                                    <th width="100">Lastname</th>
                                                    <th width="100">Cin</th>
                                                    <th width="100">Email</th>
                                                   
                                                    <th width="100">phone</th>
                
                                                    <th width="100">Photo</th>
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>                                            
                                               {users?.map((item,index)=>{
                                                   return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td><strong>{item.firstname}</strong></td>
                                                    <td>{item.lastname}</td>
                                                    <td>{item.Cin}</td>
                                                    <td>{item.email}</td>
                                                   
                                                   
                                                    <td>{item.phone}</td>
                                                    <td>{item.image && (
                                                        <img style={{height:"100px"}} src={"http://localhost:4001/getImage/"+ item.image} />
                                                    )}

                                                    </td>
                                                    <td>
                                                        <Link to={`/updateuser/${item._id}`}>
                                                       { <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>}
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)} ><span class="fa fa-times"></span></button>
                                                    </td>
                                                </tr>
                                                   )
                                               })}
                                               <Link to="/adduser" className='btn btn-primary'>
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

export default GetAllUser