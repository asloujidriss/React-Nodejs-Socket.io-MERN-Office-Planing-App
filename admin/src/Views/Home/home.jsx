
import Header from "./Header";
import Sidebar from "./Sidebar/index"
import { Link, Outlet } from "react-router-dom";


import React from 'react'

const home = () => {
  return (
    <div>
         {/* START PAGE CONTAINER */}
      <div className="page-container">

<Sidebar />

{/* PAGE CONTENT */}
<div className="page-content">
  {/* START X-NAVIGATION VERTICAL */}
  <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
    {/* TOGGLE NAVIGATION */}
    <li className="xn-icon-button">
      <a href="#" className="x-navigation-minimize">
        <span className="fa fa-dedent" />
      </a>
    </li>

    <Header />

  </ul>
  <Outlet></Outlet>
</div>

</div>
{/* <div

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
                <Link to="/login" className="btn btn-success btn-lg">
                  Oui
                </Link>
                <button className="btn btn-default btn-lg mb-control-close">
                  Non
                </button>

              </div>
            </div>
          </div>
        </div>
      </div> */}
{/* <div className="message-box animated fadeIn"
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
        <Link to="/login" className="btn btn-success btn-lg">
          Oui
        </Link>
        <button className="btn btn-default btn-lg mb-control-close">
          Non
        </button>

      </div>
    </div>
  </div>
</div>
</div> */}




    </div>
  )
}

export default home