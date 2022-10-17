import React from 'react'
import  { useState } from 'react'
import LoginService from '../../services/LoginService'
const Login = () => {
  const [data , setData] = useState({
    email:"",
    password:""

    })
    const [errors,setErrors]=useState("")
    const handleChanged=({currentTarget:input})=>{
      setData({...data,[input.name]:input.value})
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault()
  
    LoginService.create(data).then(res=>{
     console.log(res)
     setData(res.data)
     window.location="/"
     localStorage.setItem('userId',JSON.stringify(res.data.data._id));
     localStorage.setItem('user',JSON.stringify(res.data.data));
     localStorage.setItem('isRH',JSON.stringify(res.data.data.isRH));
     localStorage.setItem('ismanager',JSON.stringify(res.data.data.isManager));
    localStorage.setItem("accessToken",JSON.stringify(res.data.AccessToken))
    localStorage.setItem("RefreshToken",JSON.stringify(res.data.RefreshToken))
     
    }).catch(err=>{
       console.log(err) 
       setErrors(err.response?.data.message)
    })
  }
  return (
    <div>
    <div class="login-container">
        
        <div class="login-box animated fadeInDown">
            <div class="login-logo"></div>
            <div class="login-body">
                <div class="login-title"><strong>Welcome</strong>, Please login</div>
                <form class="form-horizontal" onSubmit={handleSubmit} >
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="Email" class="form-control" placeholder="Email" required name="email" value={data.email} onChange={handleChanged}/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="password" class="form-control" placeholder="Password"  required name="password" value={data.password} onChange={handleChanged}/>
                        {errors && <div style={{color:"red"}} className="invalid-feedback">{errors}</div>}
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-md-6">
                        <a href="#" class="btn btn-link btn-block">Forgot your password?</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-info btn-block" type="submit">Log In</button>
                    </div>
                </div>
                </form>
            </div>
          
        </div>
        
    </div>
    </div>
  )
}

export default Login