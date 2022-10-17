import React, { useState } from 'react'
import RegisterService from '../../services/RegisterService'
import './Register.css'
const Register = () => {
    const [image , setImage] = useState('')
    const [data , setData] = useState({
        firstname:"",
        lastname:"",
        Cin:"",
        email:"",
        password:"",
        phone:"",
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
              window.location="/login"
              setData(res.data.data)
//   window.location="/login"
          
          }).catch(err=>{
             console.log(err)
             
          })
        }
        const onChangeImage=(e)=>{
            setImage(e.target.files[0])
        }
  return (
    <div>
        <body>
  <div className='registerbox'>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
    <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="firstname" name="firstname" value={data.firstname} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="lastname" name="lastname" value={data.lastname} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Cin" name="Cin" value={data.Cin} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="email" class="form-control" placeholder="email" name="email" value={data.email} onChange={handleChanged} />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="password" class="form-control" placeholder="password" name="password" value={data.password} onChange={handleChanged} />
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
     
      {/* {errors && <div style={{color:"red"}} className="invalid-feedback">{errors}</div>} */}
      <input type="submit" name='' value="Login"/>
      <a href='#'>Lost your password</a><br/>
      <a href='#'>D'ont have an account</a>
    </form>
      
    
  </div>
</body>
    </div>
  )
}

export default Register