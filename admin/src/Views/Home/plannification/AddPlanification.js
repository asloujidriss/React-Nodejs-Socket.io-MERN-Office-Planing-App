import React from 'react'
import PlannificationService from '../../../services/PlannificationService'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserService from '../../../services/UserService'


const AddPlanification = () => {
    const navigate = useNavigate()
const [membres, setMembres] = useState([])
const [data, setData] = useState({
typeplanni:"",
raison:"",

})




const getAll =()=>{
    UserService.getAllm().then(res=>{
        setMembres(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
}
useEffect(() => {
    getAll()
   }, [])


const onChangeHandler=(e)=>{
    setData({
        ...data,[e.target.name]:e.target.value
    })
}

const onSubmitHandler=(e)=>{
e.preventDefault()





Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        navigate('/getplanification')
        PlannificationService.create(data).then(res=>{
            console.log("response=>>>>>>>>",res)
            setData(res.data)
        }).catch(err=>{
           console.log("err=>>>>>>>>>",err) 
        })
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

  


}



  return (
    <div>
<div className="page-content-wrap">
                
                <div className="row">
                    <div className="col-md-12">
                        
                        <form className="form-horizontal"  onSubmit={onSubmitHandler}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>ADD</strong> PLANNIFICATION</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                         
                            <div className="panel-body">                                                                        
                                
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">typeplanni</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="typeplanni" onChange={onChangeHandler}/>
                                        </div>                                            
                                     
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">raison</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="raison" onChange={onChangeHandler}/>
                                        </div>                                            
                                     
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">membre</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="col-1">
                                        <select  className="form-control" name="membre" onChange={onChangeHandler}>
                                   <option selected value=" ">---membre---</option>
                                   {membres?.map((item)=>{
                                       return(
                                           <option key={item._id} value={item._id}>
                                               {item.firstname} {item.lastname}
                                           </option>
                                       )
                                   })}
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

export default AddPlanification