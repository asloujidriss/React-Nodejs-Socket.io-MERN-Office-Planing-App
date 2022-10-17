import React, { useState } from 'react'
import './Login.css'
import Video from "./video/Video.mp4"
import "./Login.css"
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
   localStorage.setItem('token',JSON.stringify(res.data.accessToken))
  }).catch(err=>{
     console.log(err) 
     setErrors(err.response?.data.message)
  })
}
  return (

      
    <div>
<body>
  <div className='loginbox'>
    {/* <img src="planning.png" className='avatar'/> */}
    <h1>Login Here</h1>
    <form onSubmit={handleSubmit}>
     
      <input type="text" placeholder='email' required name="email" value={data.email} onChange={handleChanged} />
     
      <input type="password" placeholder='password' required name="password" value={data.password} onChange={handleChanged}/>
      {errors && <div style={{color:"red"}} className="invalid-feedback">{errors}</div>}
      <input type="submit" name='' value="Login"/>
      <a href='#'>Lost your password</a><br/>
      <a href='#'>D'ont have an account</a>
    </form>
      
    
  </div>
  {/* <video autoPlay
        loop muted
        style={{
            position:"absolute",
            width:"100%",
            left:"50%",
            top:"50%",
            height:"100%",
            objectFit:"cover",
            transform:"translate(-50%, -50%)",
            zIndex:"-1"

        }}
        >
            <source src={Video} type="video/mp4"/>
        </video> */}
</body>


{/* <form > */}
{/* <div className="center">
  <div className='txt_field'>
  <input type="text" required/>
    <label>Username</label>
    </div>
    </div>
  
 

  </form> */}
</div>


  )
}

export default Login