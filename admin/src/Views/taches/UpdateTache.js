
import TacheService from '../../services/TacheService'
import React, { useEffect, useState } from 'react'
import {Link,useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateTache = () => {
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
   
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        navigate('/gettache')
        TacheService.update(id,data).then(res=>{
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

    TacheService.get(id).then(res=>{
      console.log(res)
  setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  
  }, [])
  return (
    <div>
         {/* <div className="page-content-wrap">
                
                <div className="row">
                    <div className="col-md-12">
                        
                        <form className="form-horizontal"  onSubmit={onSubmitHandler}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>ADD</strong> USER</h3>
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
                                            <input type="text" className="form-control" value={data.titre} name="titre" onChange={onChangeHandler}/>
                                        </div>                                            
                                     
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">date_debut</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.date_debut} name="date_debut" onChange={onChangeHandler}/>
                                        </div>                                            
                                      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">date_fin</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.date_fin} name="date_fin" onChange={onChangeHandler}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>

                                <div className="form-group">                                        
                                    <label className="col-md-3 col-xs-12 control-label">etat</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-unlock-alt"></span></span>
                                            <input type="text" className="form-control" value={data.etat} name="etat" onChange={onChangeHandler}/>
                                        </div>            
                                       
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">description</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" value={data.description} name="description" onChange={onChangeHandler}/>
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
                
            </div> */}
             <div><div>
            <div className="page-content-wrap">
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-horizontal" onSubmit={onSubmitHandler} >
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title"><strong> Màj </strong> tache</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label className="col-md-3 col-xs-12 control-label">nom</label>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                                                <input type="text" className="form-control" value={data.titre} name="titre" onChange={onChangeHandler} />
                                            </div>
                                            <span className="help-block">Ajouter ref_cmd</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 col-xs-12 control-label">etat</label>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                                                <input type="text" className="form-control" value={data.etat} name="etat" onChange={onChangeHandler} />
                                            </div>
                                            <span className="help-block">Ajouter date</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 col-xs-12 control-label">description</label>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="fa fa-pencil" /></span>
                                                <input type="text" className="form-control" value={data.description} name="description" onChange={onChangeHandler} />
                                            </div>
                                            <span className="help-block">Ajouter qte_total</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="panel-footer">
                                    <Link to="/gettache" className="btn btn-primary">Liste </Link>
                                    <button className="btn btn-primary pull-right" type="submit">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div></div>
    </div>
  )
}

export default UpdateTache