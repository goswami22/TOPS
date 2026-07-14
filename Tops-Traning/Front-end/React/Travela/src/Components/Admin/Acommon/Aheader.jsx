import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Aheader() {

    const redirect = useNavigate()

    
    useEffect(()=> {
        if(!localStorage.getItem('Aid')) {
            redirect('/Alogin')
        }
    })
    
    
    const logout = () => {
        localStorage.removeItem('Aid')
        localStorage.removeItem('Aname')
        redirect('/Alogin')
        toast.success('Logout Successfully')
    }



    return (

        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-primary px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a href="#"><small className="me-3 text-light"><i className="fa fa-user me-2" />Register</small></a>

                            <span className='me-2 d-inline-flex text-white'>
                                {
                                    (() => {
                                        if (localStorage.getItem('Aid')) {
                                            return (
                                                <small>( Hello {localStorage.getItem('Aname')} )</small>
                                            )
                                        }
                                    })()
                                }

                                {
                                    (() => {
                                        if (localStorage.getItem('Aid')) {
                                            return (
                                                <div>
                                                    <Link onClick={logout}><small className="mx-3 text-light"><i className="fa fa-sign-out-alt me-2" />Logout</small></Link>
                                                    <Link to={''} className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> My Dashboard</small></Link>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <Link to='/Alogin'><small className="mx-3 text-light"><i className="fa fa-sign-in-alt me-2" />Login</small></Link>
                                            )
                                        }
                                    })()
                                }
                            </span>
                            <div className="dropdown">
                                <div className="dropdown-menu rounded">
                                    <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2" /> My Profile</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2" /> Inbox</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-bell me-2" /> Notifications</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-cog me-2" /> Account Settings</a>
                                    <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2" /> Log Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}


            {/* Navbar start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Dashboad</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">

                            <NavLink to="/admin" className="nav-item nav-link">Home</NavLink>
                            {/* <NavLink to="/about" className="nav-item nav-link">About</NavLink> */}
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/Aservices" className="dropdown-item">Manage Services</NavLink>
                                    <NavLink to="/AddServices" className="dropdown-item">Add Services</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/AdminBlog" className="dropdown-item">Manage Blog</NavLink>
                                    <NavLink to="/AddBlog" className="dropdown-item">Add Blog</NavLink>
                                </div>
                            </div>
                            
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Page</a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/APackages" className="dropdown-item">Manage Packages</NavLink>
                                    <NavLink to="/Adesination" className="dropdown-item">Manage Destination</NavLink>
                                    <NavLink to="/Atour" className="dropdown-item">Manage Explore Tour</NavLink>
                                    <NavLink to="/Agallery" className="dropdown-item">Manage Gallery</NavLink>
                                    <NavLink to="/" className="dropdown-item">Travel Booking</NavLink>
                                    <NavLink to="/AtravelGuid" className="dropdown-item">Manage Travel Guides</NavLink>
                                    <NavLink to="/" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <NavLink to="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Manage Book Now</NavLink>
                    </div>
                </nav>
            </div>
            {/* Navbar start */}

        </div>
    )
}

export default Aheader
