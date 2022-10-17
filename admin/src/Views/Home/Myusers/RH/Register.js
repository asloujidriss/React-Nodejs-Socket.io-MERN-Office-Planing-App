import React from 'react'
import RegisterService from '../../../../services/RegisterService'
import { useState } from 'react'
const Register = () => {
    const [image , setImage] = useState('')
    const [data , setData] = useState({
        firstname:"",
        lastname:"",
        Cin:"",
        email:"",
        password:"",
       
        phone:"",
    
        // isRH:"",
        image:"",
    })
    const handleChanged=(e)=>{
        setData({...data,
            [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formdata= new FormData()
        formdata.append("photo",image)
        formdata.append("firstname",data.firstname)
        formdata.append("lastname",data.lastname)
        formdata.append("Cin",data.Cin)
        formdata.append("phone",data.phone)
        formdata.append("password",data.password)
        formdata.append("email",data.email)
        
          RegisterService.create(formdata).then(res=>{
              console.log(res)
              setData(res.data)
              window.location="/login"
          
          }).catch(err=>{
             console.log(err) 
          })
        }
        const onChangeImage=(e)=>{
            setImage(e.target.files[0])
        }
  return (
    <div>
          <div>
       <div class="login-container">
        
        <div class="login-box animated fadeInDown">
            <div class="login-logo"></div>
            <div class="login-body">
                <div class="login-title"><strong>Welcome</strong>, sign up</div>
                <form  class="form-horizontal" >
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="firstname" name="firstname" value={data.firstname} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Lastname" name="lastname" value={data.lastname} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="CIN" name="Cin" value={data.Cin} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="email" class="form-control" placeholder="Email" name="email" value={data.email} onChange={handleChanged} />
                    </div>
                </div>
              
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="password" class="form-control" placeholder="Password" name="password" value={data.password} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="phone" name="phone" value={data.phone} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="file" class="form-control" placeholder="Photo" name="image" onChange={onChangeImage}/>
                    </div>
                  
              
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <a href="#" class="btn btn-link btn-block">Forgot your password?</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-info btn-block" onClick={handleSubmit}>Sign Up</button>
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

export default Register