import React from 'react'
import DocumentService from '../../../services/DocumentService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddDocument = () => {
    const navigate = useNavigate()
const [data, setData] = useState({})
const [images,setimages] = useState([])
const onChangeHandler=(e)=>{
    setData({
        ...data,[e.target.name]:e.target.value
    })
}
const onSubmitHandler=(e)=>{
    e.preventDefault()
    
    const formdata = new FormData()
    
   
    for(let i=0;i<=images.length;i++){
        formdata.append("photos",images[i])
    }
    


    formdata.append('titre',data.titre)
    formdata.append('type',data.type)
    formdata.append('description',data.description)
    
    
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            navigate('/getdocuments')
            DocumentService.create(formdata).then(res=>{
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
    const handleimages =(e)=>{
        setimages(e.target.files)
    }
  return (
    <div>
        <div className="page-content-wrap">
                
                <div className="row">
                    <div className="col-md-12">
                        
                        <form className="form-horizontal"  onSubmit={onSubmitHandler}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>ADD</strong> document</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                         
                            <div className="panel-body">                                                                        
                                
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">titre</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="titre" onChange={onChangeHandler}/>
                                        </div>                                            
                                     
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">type</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="type" onChange={onChangeHandler}/>
                                        </div>                                            
                                      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">description</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="description" onChange={onChangeHandler}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>

                               
                                
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">File</label>
                                    <div className="col-md-6 col-xs-12">                                                                                                                                        
                                        <input type="file" className="fileinput btn-primary" name="galleries" onChange={handleimages} />
                                       
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

export default AddDocument