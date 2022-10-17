import React from 'react'
import LoginService from '../../services/LoginService'

const Logout = () => {
  const handleLogout = ()=>{
    LoginService.logout().then(res=>{
      console.log(res)
      window.location="/Login"
             localStorage.clear()
    //props.history.push('/Login')
    }).catch(err=>{
      alert(err.response.data.message)
    })
  }
  return (
    <div>
        <a className="nav-item nav-link" onClick={handleLogout}>Log out</a> 
    </div>
  )
}

export default Logout