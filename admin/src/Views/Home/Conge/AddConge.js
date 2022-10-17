import React from 'react'
import CongeService from '../../../services/CongeService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const AddConge = () => {
    const navigate = useNavigate()
const [data, setData] = useState({
    duree:"",
    date_debut:"",
    date_fin:"",
    raison:""
})
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
            navigate('/getconge')
            CongeService.create(data).then(res=>{
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
                                <h3 className="panel-title"><strong>ADD</strong> CONGE</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">duree</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="duree" onChange={onChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Date_Debut</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="date" className="form-control" name="date_debut" onChange={onChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Date_Fin</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="date" className="form-control" name="date_fin" onChange={onChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Raison</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="raison" onChange={onChangeHandler}/>
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

export default AddConge