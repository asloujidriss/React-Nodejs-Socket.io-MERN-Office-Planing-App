import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      {/* START PAGE SIDEBAR */}
      <div className="page-sidebar">
    {/* START X-NAVIGATION */}
    <ul className="x-navigation">
      <li className="xn-logo">
        <a href="index.html">MarWork</a>
        <a href="#" className="x-navigation-control" />
      </li>
      <li className="xn-profile">
        <a href="#" className="profile-mini">
          <img src="assets/images/users/avatar.jpg" alt="John Doe" />
        </a>
        <div className="profile">
          <div className="profile-image">
            <img src="assets/images/users/mirwa.jpg" alt="John Doe" />
          </div>
          <div className="profile-data">
            <div className="profile-data-name">John Doe</div>
            <div className="profile-data-title">Web Developer/Designer</div>
          </div>
          <div className="profile-controls">
            <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></a>
            <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></a>
          </div>
        </div>                                                                        
      </li>
    
      <li className="active">
        <Link to="./"><span className="fa fa-desktop" /> <span className="xn-text">Home</span></Link>                        
      </li>                    
      <li className="xn-openable">
        <Link to="#"><span className="fa fa-files-o" /> <span className="xn-text">Bureaux</span></Link>
        <ul>
          <li><Link to="/g"><span className="fa fa-image" /> Listes de Bureaux</Link></li>
          <li><Link to="/addbureau"><span className="fa fa-user" /> Ajouter bureau</Link></li>
          {/* <li><a href="pages-address-book.html"><span className="fa fa-users" /> Address Book</a></li> */}
          
          
          <li><a href="pages-messages.html"><span className="fa fa-comments" /> Messages</a></li>
          <li><a href="pages-calendar.html"><span className="fa fa-calendar" /> Calendar</a></li>
          <li><a href="pages-tasks.html"><span className="fa fa-edit" /> Tasks</a></li>
          <li><a href="pages-content-table.html"><span className="fa fa-columns" /> Content Table</a></li>
          <li><a href="pages-faq.html"><span className="fa fa-question-circle" /> FAQ</a></li>
          <li><a href="pages-search.html"><span className="fa fa-search" /> Search</a></li>
          <li className="xn-openable">
            <a href="#"><span className="fa fa-file" /> Blog</a>
            <ul>                                    
              <li><a href="pages-blog-list.html"><span className="fa fa-copy" /> List of Posts</a></li>
              <li><a href="pages-blog-post.html"><span className="fa fa-file-o" />Single Post</a></li>
            </ul>
          </li>
          <li className="xn-openable">
            <a href="#"><span className="fa fa-sign-in" /> Login</a>
            <ul>                                    
              <li><a href="pages-login.html">App Login</a></li>
              <li><a href="pages-login-website.html">Website Login</a></li>
              <li><a href="pages-login-website-light.html"> Website Login Light</a></li>
            </ul>
          </li>
          <li className="xn-openable">
            <a href="#"><span className="fa fa-warning" /> Error Pages</a>
            <ul>                                    
              <li><a href="pages-error-404.html">Error 404 Sample 1</a></li>
              <li><a href="pages-error-404-2.html">Error 404 Sample 2</a></li>
              <li><a href="pages-error-500.html"> Error 500</a></li>
            </ul>
          </li>                            
        </ul>
      </li>
      <li className="xn-openable">
          <a><span className="fa fa-file-text-o" /> <span className="xn-text">Equipes</span></a>
          <ul>
            <Link to={"/getequipe"} >
            <li>
              <a><span className="fa fa-pencil" /> List des Equipes</a></li>
            </Link>
            <Link to={"/addequipe"} >
            <li><a><span className="fa fa-file-text-o" /> ajouter</a></li>
            </Link>
          </ul>
        </li>

                    
    
   
                     
   
    </ul>
    {/* END X-NAVIGATION */}
  </div>

      {/* END PAGE SIDEBAR */}
    </div>
  )
}

export default Sidebar