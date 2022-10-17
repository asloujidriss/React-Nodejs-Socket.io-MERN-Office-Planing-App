import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SondageService from '../../../services/SondageService';

const AddSondage = () => {
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([]);
    const [data, setData] = useState({
        questions:[]
    })

    for (let i = 0; i <questions.length; i++) {
        data.questions.push({question:""});   
    }
    const onChangeHandler = (e,i) => {
        data.questions[i] = {
          question: e.target.value,
        };
        setData(data);
      };
   
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
               
                SondageService.create(data).then(res=>{
                    console.log("response=>>>>>>>>",res)
                    setData(res.data)
                    window.location=`/getsondage`
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
                                <h3 className="panel-title"><strong>ADD</strong> SONDAGE</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions1</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="questions" onChange={(e)=>onChangeHandler(e,0)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions2</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="questions" onChange={(e)=>onChangeHandler(e,1)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions3</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="questions" onChange={(e)=>onChangeHandler(e,2)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions4</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,3)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions5</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,4)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions6</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,5)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions7</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,6)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions8</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,7)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions9</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,8)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">Questions10</label>
                                    <div className="col-md-6 col-xs-12">
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="question" onChange={(e)=>onChangeHandler(e,9)}/>
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
  )
    </div>
  )
}

export default AddSondage