import React from 'react'
import Swal from 'sweetalert2'
import UserServicerh from '../../../../services/UserServicerh'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateUser = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    // const [image,setImage] = useState("")
    const {id}  = useParams()
  
    const onChangeHandler=(e)=>{
      setData({
          ...data,[e.target.name]:e.target.value
      })
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    
    // const formdata = new FormData()
    
    // formdata.append('photo',image)
    // formdata.append('firstname',data.firstname)
    // formdata.append('lastname',data.lastname)
    // formdata.append('email',data.email)
    // formdata.append('password',data.password)
    // formdata.append('phone',data.phone)
    
    
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            navigate('/getmy')
            UserServicerh.update(id,data).then(res=>{
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

        UserServicerh.get(id).then(res=>{
          console.log(res)
      setData(res.data.data)
        }).catch(err=>{
          console.log(err)
        })
      
      }, [])
      
      
      
      
        //   const handleimage =(e)=>{
        //     setImage(e.target.files[0])
        // }
  return (
    <div>
          <div>
      <div className="page-content-wrap">
                
                <div className="row">
                    <div className="col-md-12">
                        
                        <form className="form-horizontal"  onSubmit={onSubmitHandler}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>Update</strong> RH</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                         
                            <div className="panel-body">                                                                        
                                
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">FirstName</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.firstname} name="firstname" onChange={onChangeHandler}/>
                                        </div>                                            
                                     
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">LastName</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.lastname} name="lastname" onChange={onChangeHandler}/>
                                        </div>                                            
                                      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Email</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.email} name="email" onChange={onChangeHandler}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>

                                
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">phone</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.phone} name="phone" onChange={onChangeHandler}/>
                                        </div>                                            
                                       
                                    </div>
                                </div>
                               
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Role</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="col-1">
                                            
                                            <select  className="form-control"  value={data.isRH} name="isRH"  onChange={onChangeHandler}>
                                            <option selected value="" >---Role---</option>
                                            <option >false</option>
                                            <option >True</option>
                                            </select>
                                        </div>                                            
                                        
                                    </div>
                                </div>

                                
                                {/* <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">File</label>
                                    <div className="col-md-6 col-xs-12">                                                                                                                                        
                                        <input type="file" className="fileinput btn-primary" name="image" onChange={handleimage} />
                                       
                                    </div>
                                </div> */}
                                
                             

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
    </div>
  )
}

export default UpdateUser