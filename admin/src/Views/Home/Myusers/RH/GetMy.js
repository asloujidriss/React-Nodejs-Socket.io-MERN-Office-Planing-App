import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserServicerh from '../../../../services/UserServicerh';

const GetMy = () => {
    const [rhs,setrhs]=useState([])



    const getbyidrh = ()=>{
        UserServicerh.getAllrh().then(res=>{
            console.log("getrh======>>>>",res)
            setrhs(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect (()=>{
        getbyidrh()
    
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
                UserServicerh.remove(id).then(res=>{
                    setrhs()
                
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
        <h3 className="panel-title"><strong>Liste des rh</strong></h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}><center>id</center></th>
                <th width={50}>firstname</th>
                <th width={50}>lastname</th>
                <th width={100}>email</th>
                <th width={100}>Cin</th>
               
                <th width={100}>phone</th>
                <th width={100}>role</th>
                <th width={50}>Actions</th>
              </tr>
            </thead>
            <tbody>                                            
              {rhs?.map((item,index)=>{

                return (
                <tr id="trow_1">
                <td className="text-center">{index}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td><strong>{item.email}</strong></td>
                <td>{item.Cin}</td>
                <td>{item.phone}</td>
                <td>{item.isRH}</td>
                <td>
                  
                  { <Link to = {`/UpdateUser/${item._id}`}>
                  <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
                  </Link> }

                  {<button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button> }
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
    {/* <Link to="/addconge" className='btn btn-primary'>Add conge</Link>  */}
  </div>
</div>
    </div>
    </div>
  )
}

export default GetMy