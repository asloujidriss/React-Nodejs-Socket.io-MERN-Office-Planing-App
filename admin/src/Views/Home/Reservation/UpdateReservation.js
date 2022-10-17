import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import ReservationService from '../../../services/ReservationService'

const UpdateReservation = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    
    const {id}  = useParams()
  
    const onChangeHandler=(e)=>{
      setData({
          ...data,[e.target.name]:e.target.value
      })
  }
  const onSubmitHandler=(e)=>{
      e.preventDefault()
      
      // const formdata = new FormData()
      
      
      // formdata.append('nom',data.nom)
      // formdata.append('description',data.description)
      //formdata.append('email',data.email)
      // formdata.append('password',data.password)
      // formdata.append('adressL',data.adressL)
      
      
      Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
              navigate('/getreservation')
              ReservationService.update(id,data).then(res=>{
                  console.log("response=>>>>>>>>",res)
                
              }).catch(err=>{
                 console.log("err=>>>>>>>>>",err) 
              })
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
    
      }
  
  useEffect(() => {
  
    ReservationService.get(id).then(res=>{
      console.log(res)
  setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  
  }, [])
   return (
    <div>
        
<div className="page-content-wrap">
                
                <div className="row">
                    <div className="col-md-12">
                        
                        <form className="form-horizontal"  onSubmit={onSubmitHandler}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>Update</strong> Conge</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                         
                            <div className="panel-body">                                                                        
                                
                               
                               
                            
                              
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">description</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="description" value={data.description}  onChange={onChangeHandler}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Etat</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="col-1">
 
                                     

                                            <select  className="form-control"  value={data.status} name="status"  onChange={onChangeHandler}>
                                            <option selected value="" >---Etat---</option>
                                            <option >Accepter</option>
                                            <option >Refuser</option>
                                            </select>
                                        </div>                                            
                                        
                                    </div>
                                </div>

                                
                             

                                
                                
                                
                             

                            </div>
                            <div className="panel-footer">
                                <button className="btn btn-default">Clear Form</button>                                    
                                <button className="btn btn-primary pull-right" type="submit">Submit</button>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>                    
                
            </div>





    </div>
  )
}

export default UpdateReservation