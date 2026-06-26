import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { BsBag } from "react-icons/bs";


function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" href="#">
                            <img src="/image/logo-dark.avif" alt="logo" className='img-fluid logo' />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase fw-semibold active" aria-current="page" to={'/'}>Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link text-uppercase fw-semibold dropdown-toggle" to={'/colletions'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        colletions
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link text-uppercase fw-semibold dropdown-toggle" to={'/products'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link text-uppercase fw-semibold dropdown-toggle" to={'/pages'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        pages
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link text-uppercase fw-semibold dropdown-toggle" to={'/blog'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <BiSearch size={20} />
                                    </Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link to="/" className="nav-link">
                                        <FiUser size={20} />
                                    </Link>
                                </li>
                                <li className="nav-item ms-4">
                                    <Link to="/" className="nav-link">
                                        <BsStar size={20} />
                                    </Link>
                                </li>
                                <li className="nav-item ms-4 position-relative cart-link bg-dark rounded-circle text-center">
                                    <Link to="/" className="nav-link">
                                        <BsBag size={20} color='#ffffff'/>
                                    </Link>
                                        <span className='position-absolute rounded-circle translate-middle'>0</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
