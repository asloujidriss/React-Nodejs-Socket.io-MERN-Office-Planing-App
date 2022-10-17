import React from 'react'
import { Link } from 'react-router-dom'
import LoginService from '../../services/LoginService'

const Logout = () => {
  
    const handleLogout = ()=>{

      LoginService.logout().then(res=>{

        window.location="/login"
        localStorage.clear()
   
      }).catch(err=>{
       console.log(err)
      })
    }
      



  return (
    <div>
       <li className="xn-icon-button pull-right">
       <a className="mb-control" data-box="#mb-signout" onClick={handleLogout} ><span className="fa fa-sign-out" /></a>                        
     
       <div

        className="message-box animated fadeIn"
        data-sound="alert"
        id="mb-signout"
      >
        <div className="mb-container">
          <div className="mb-middle">
            <div className="mb-title">
              <span className="fa fa-sign-out" /> Se <strong>déconnecter</strong> ?
            </div>
            <div className="mb-content">
              <p>Êtes-vous sûr de vouloir vous déconnecter?</p>
              <p>
                Appuyez sur <strong>Non</strong> si vous souhaitez continuer à travailler.<br />
                Appuyez sur <strong>Oui</strong> pour déconnecter l'utilisateur actuel.
              </p>
            </div>
            <div className="mb-footer">
              <div className="pull-right">
                <Link to="/login" className="btn btn-success btn-lg" onClick={handleLogout}>
                  Oui
                </Link>
                <button className="btn btn-default btn-lg mb-control-close">
                  Non
                </button>

              </div>
            </div>
          </div>
        </div>
      </div></li> 
     </div>
    
  )
}

export default Logout