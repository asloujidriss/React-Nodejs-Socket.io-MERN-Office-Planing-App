import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Layout from './Layout/Layout'
import Footer from './Footbar/index'
import Header from './Header/index'

const Home = () => {
  return (
    <div>
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner" />
  </div> */}
<Header />
  {/* Full Screen Search End */}
  {/* Facts Start */}
  <Outlet></Outlet>
  {/* Vendor End */}
  {/* Footer Start */}

  {/* <Footer /> */}



    </div>
  )
}

export default Home