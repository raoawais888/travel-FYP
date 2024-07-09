import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
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
                                <li className="app-sidebar__heading">Dashboards</li>
                                <li>
                                    <NavLink to="/admin/dashboard" className="">
                                        
                                        <i class="fa-solid fa-gauge metismenu-icon"></i>
                                        Dashboard
                                    </NavLink>
                                </li>
                                
                              
                                
                                <li className="app-sidebar__heading">Agencies</li>
                                <li>
                                    <NavLink to="/admin/add-agency">
                                    <i class="fa-solid fa-building metismenu-icon "></i>
                                        
                                        Add Agency
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/agency">
                                    <i class="fa-solid fa-building metismenu-icon "></i>
                                    All Agencies
                                    </NavLink>
                                </li>
                                
                                <li className="app-sidebar__heading">Users</li>
                                <li>
                                    <NavLink to="/admin/add-user">
                                    <i class="fa-solid fa-user metismenu-icon"></i>Add User
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/users">
                                      
                                        <i class="fa-solid fa-users metismenu-icon"></i>
                                        All Users
                                    </NavLink>
                                </li>

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
                                


                                <li className="app-sidebar__heading">Offers</li>
                                <li>
                                    <NavLink to="/admin/add-offer">
                                    <i class="fa-solid fa-tags metismenu-icon"></i>
                                       
                                        Add Offer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/offers">
                                    <i class="fa-solid fa-tags metismenu-icon"></i>
                                       
                                        All Offers
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
                                
                               
                                
                            </ul>
                        </div>
                    </div>
                </div>   
                
   </>
  )
}

export default Sidebar