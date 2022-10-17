import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import EquipeService from '../../../services/EquipeService'
import UserService from '../../../services/UserService'
import { Select } from 'antd';

const { Option } = Select;



const AddEquipe = () => {
    const navigate = useNavigate()
    const[membres,setMembres]=useState([])
    const [data , setData] = useState({
        nom:"",
        description:"",
        Membres:[]
        
    })

    const children = [];
    for (let i = 0; i < Option.length; i++) {
      chilrden.push(<Option key={i.toString(i) + i}>{i.toString(i) + i}</Option>);
    }
    function handleChange(value) {
      console.log(`selected ${value}`);
      setData(prev=>({
       ...prev,
       ["Membres"]:value
      }))
    } 

    const onChangeHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }




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
        navigate('/getequipe')
    EquipeService.create(data).then(res=>{
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
                                <h3 className="panel-title"><strong>ADD</strong> Equipe</h3>
                                <ul className="panel-controls">
                                    <li><a href="#" className="panel-remove"><span className="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                         
                            <div className="panel-body">                                                                        
                                
                                <div className="form-group">
                                    <label className="col-md-3 col-xs-12 control-label">nom</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="fa fa-pencil"></span></span>
                                            <input type="text" className="form-control" name="nom" onChange={onChangeHandler}/>
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
                                    <label className="col-md-3 col-xs-12 control-label">Membres</label>
                                    <div className="col-md-6 col-xs-12">                                            
                                        <div className="col-1">
                                        <Select  mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Add membres"
      defaultValue={[]}
       name="Membres" onChange={handleChange}>
                                  
                                   {membres.map((item)=>{
                                       return(
                                           <Option key={item._id} value={item._id}>
                                               {item.lastname} {item.firstname}
                                           </Option>
                                       )
                                   })}
                                    {children}
                                   </Select>
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

export default AddEquipe