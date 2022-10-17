import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import PlannificationService from '../../../services/PlannificationService'


const GetALLPlanification = () => {
    const [plannifications,setPlannifications]=useState([])

    const getAll = ()=>{
        PlannificationService.getAll().then(res=>{
            console.log(res)
            setPlannifications(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getAll()
    },[])
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
          <div style={{marginTop:"150px"}}>
        <h1>Liste of plannifications</h1>
        {/* <table>
  <tr>
    <td>Nom</td>
    <td>Prénom</td>
    <td>Age</td>
    <td>Mail</td>
  </tr>
  <tr>
    <td>Giraud</td>
    <td>Pierre</td>
    <td>28</td>
    <td>pierre.giraud@edhec.com</td>
  </tr>
  <tr>
    <td>Joly</td>
    <td>Pauline</td>
    <td>27</td>
    <td>pjl@gmail.com</td>
  </tr>
</table> */}
<table border="1" cellpadding="10" cellspacing="1" width="100%">
   <tr>
      <th width="20%">id</th>
      <th width="20%">typeplanni</th>
      <th width="20%">raison</th>
      <th width="20%">status</th>
      <th width="100">actions</th>
     
     
     
   </tr>
   {plannifications?.map((item,index)=>{
return (
   <tr>
      <td>{index}</td>
      <td>{item.typeplanni}</td>
      
      <td>{item.raison}</td>
      <td>
      {item.status==="1" ? "accepted"
      : item.status=== "2" ? "refused"
      : "en attente"}</td>
      <td>
      <button class="btn btn-danger btn-rounded btn-sm" onClick={(e)=>onDelete(item._id)}><span class="fa fa-times"></span></button>
      </td>
   </tr>
   )
}
)}
 <Link to="/addplannification" className='btn btn-primary'>
   AddPlannification
  </Link>
</table>
    </div>
    </div>
  )
}

export default GetALLPlanification
