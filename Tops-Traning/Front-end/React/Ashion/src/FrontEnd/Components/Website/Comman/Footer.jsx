import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/img/logo.png';
import payment1 from '../../../Assets/img/payment/payment-1.png';
import payment2 from '../../../Assets/img/payment/payment-2.png';
import payment3 from '../../../Assets/img/payment/payment-3.png';
import payment4 from '../../../Assets/img/payment/payment-4.png';
import payment5 from '../../../Assets/img/payment/payment-5.png';


function Footer() {
  return (
    <div>
      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <NavLink to='/'><img src={logo} alt /></NavLink>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  cilisis.</p>
                <div className="footer__payment">
                  <NavLink to=''><img src={payment1} alt /></NavLink>
                  <NavLink to=''><img src={payment2} alt /></NavLink>
                  <NavLink to=''><img src={payment3} alt /></NavLink>
                  <NavLink to=''><img src={payment4} alt /></NavLink>
                  <NavLink to=''><img src={payment5} alt /></NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Orders Tracking</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Wishlist</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">Subscribe</button>
                </form>
                <div className="footer__social">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-youtube-play" /></a>
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-pinterest" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              <div className="footer__copyright__text">
                <p>Copyright ©  All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
              </div>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}

    </div>
  )
}

export default Footer
