import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    
    const user = JSON.parse( localStorage.getItem('user')); 

      
  return (
   <>
   <div className="app-sidebar sidebar-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src"></div>
                        <div className="header__pane ml-auto">
                            <div>
                                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-className="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>    <div className="scrollbar-sidebar">
                        <div className="app-sidebar__inner">
                            <ul className="vertical-nav-menu">
                                <li className="app-sidebar__heading">Sliders</li>
                                <li>
                                    <NavLink to="/admin/add-slider" className="">
                                        
                                        <i class="fa-solid fa-gauge metismenu-icon"></i>
                                        Add Sliders
                                    </NavLink>
                                </li>


                                <li>
            <NavLink to="/admin/sliders">
            <i class="fa-solid fa-gauge metismenu-icon"></i>
        sliders
            </NavLink>
          </li>


                                {/* {user.role === 1 && ( */}
        <>
          <li className="app-sidebar__heading">Agencies</li>
          <li>
            <NavLink to="/admin/add-agency">
              <i className="fa-solid fa-building metismenu-icon"></i>
              Add Agency
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/agency">
              <i className="fa-solid fa-building metismenu-icon"></i>
              All Agencies
            </NavLink>
          </li>
        
    
                                <li className="app-sidebar__heading">Users</li>
                                <li>
                                    <NavLink to="/admin/add-user">
                                    <i class="fa-solid fa-user metismenu-icon"></i> Admin User
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/users">
                                      
                                        <i class="fa-solid fa-users metismenu-icon"></i>
                                        All Users
                                    </NavLink>
                                </li>
                                </>

{/* )} */}
                                <li className="app-sidebar__heading">Packages</li>
                                <li>
                                    <NavLink to="/admin/add-package">
                                        
                                        <i class="fa-solid fa-cube metismenu-icon"></i>
                                        Add package
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/packages">
                                        
                                        <i class="fa-solid fa-cube metismenu-icon"></i>
                                        All packages
                                    </NavLink>
                                </li>
                                


                                <li className="app-sidebar__heading">Bookings</li>
                                <li>
                                    <NavLink to="/admin/bookings">
                                    <i class="fa-solid fa-tags metismenu-icon"></i>
                                       
                                        Bookings
                                    </NavLink>
                                </li>
                                
                                
                               
                                <li className="app-sidebar__heading">Blogs</li>
                                <li>
                                    <NavLink to="/admin/add-blog">
                                    <i class="fa-brands fa-blogger-b metismenu-icon"></i>
                                        Add Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/blogs">
                                    <i class="fa-brands fa-blogger-b metismenu-icon"></i>
                                        All Blogs
                                    </NavLink>
                                </li>

                                <li className="app-sidebar__heading">Testimonials</li>
                                <li>
                                    <NavLink to="/admin/add-testimonial">
                                    <i class="fa-brands fa-blogger-b metismenu-icon"></i>
                                   Add   Testimonial
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/testimonials">
                                    <i class="fa-brands fa-blogger-b metismenu-icon"></i>
                                    Testimonials
                                    </NavLink>
                                </li>
                                
                               
                                
                            </ul>
                        </div>
                    </div>
                </div>   
                
   </>
  )
}

export default Sidebar