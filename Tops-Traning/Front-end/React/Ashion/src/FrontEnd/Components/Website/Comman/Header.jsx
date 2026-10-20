import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import logo from '../../../Assets/img/logo.png';

function Header() {
    return (
        <div>
            {/* Header Section Begin  */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html"><img src={logo} alt /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <NavLink to='/'>Home</NavLink>
                                    </li>
                                    <li><NavLink href="#">Women’s</NavLink></li>
                                    <li><NavLink href="#">Men’s</NavLink></li>
                                    <li><NavLink to='/shop'>Shop</NavLink></li>
                                    <li><NavLink href="#">Pages</NavLink>
                                        <ul className="dropdown">
                                            <li><NavLink to='/product_details'>Product Details</NavLink></li>
                                            <li><NavLink to='/shop_cart'>Shop Cart</NavLink></li>
                                            
                                            <li><NavLink to='/checkout'>Checkout</NavLink></li>
                                            <li><NavLink to='/blog_details'>Blog Details</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to='/blog'>Blog</NavLink></li>
                                    <li><NavLink to='/contact'>Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <NavLink to="#">Login</NavLink>
                                    <NavLink to="#">Register</NavLink>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch" /></li>
                                    <li><NavLink to="#"><span className="icon_heart_alt" />
                                        <div className="tip">2</div>
                                    </NavLink></li>
                                    <li><NavLink to="#"><span className="icon_bag_alt" />
                                        <div className="tip">2</div>
                                    </NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>

            {/* Header Section End  */}

        </div>
    )
}

export default Header
