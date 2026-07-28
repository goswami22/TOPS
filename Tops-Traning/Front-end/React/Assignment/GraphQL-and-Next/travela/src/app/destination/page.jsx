import Navbar from '@/Layout/comm/Navbar'
import React from 'react'

function page() {
    return (
        <div>
            <Navbar />

            <div>
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">Travel Destination</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">Destination</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
                {/* Destination Start */}
                <div className="container-fluid destination py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Destination</h5>
                            <h1 className="mb-0">Popular Destination</h1>
                        </div>
                        <div className="tab-class text-center">
                            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-dark" style={{ width: 150 }}>All</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-dark" style={{ width: 150 }}>USA</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{ width: 150 }}>Canada</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{ width: 150 }}>Europe</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{ width: 150 }}>China</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                        <span className="text-dark" style={{ width: 150 }}>Singapore</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-xl-8">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-1.jpg" alt="image" />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">New York City</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-1.jpg" data-lightbox="destination-1"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-2.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">Las vegas</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-2.jpg" data-lightbox="destination-2"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-7.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-7.jpg" data-lightbox="destination-7"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="destination-img">
                                                        <img className="img-fluid rounded w-100" src="img/destination-8.jpg" alt />
                                                        <div className="destination-overlay p-4">
                                                            <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                            <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                            <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                        </div>
                                                        <div className="search-icon">
                                                            <a href="img/destination-8.jpg" data-lightbox="destination-8"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="destination-img h-100">
                                                <img className="img-fluid rounded w-100 h-100" src="img/destination-9.jpg" style={{ objectFit: 'cover', minHeight: 300 }} alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-9.jpg" data-lightbox="destination-4"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-4.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-4.jpg" data-lightbox="destination-4"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-5" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-6" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-5.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-5.jpg" data-lightbox="destination-5"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="destination-img">
                                                <img className="img-fluid rounded w-100" src="img/destination-6.jpg" alt />
                                                <div className="destination-overlay p-4">
                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                    <h4 className="text-white mb-2 mt-3">San francisco</h4>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                                <div className="search-icon">
                                                    <a href="img/destination-6.jpg" data-lightbox="destination-6"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Destination End */}
                {/* Subscribe Start */}
                <div className="container-fluid subscribe py-5">
                    <div className="container text-center py-5">
                        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                            <h5 className="subscribe-title px-3">Subscribe</h5>
                            <h1 className="text-white mb-4">Our Newsletter</h1>
                            <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                            </p>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Subscribe End */}
                {/* Footer Start */}
                <div className="container-fluid footer py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Get In Touch</h4>
                                    <a href><i className="fas fa-home me-2" /> 123 Street, New York, USA</a>
                                    <a href><i className="fas fa-envelope me-2" /> info@example.com</a>
                                    <a href><i className="fas fa-phone me-2" /> +012 345 67890</a>
                                    <a href className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-share fa-2x text-white me-2" />
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn-square btn btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Company</h4>
                                    <a href><i className="fas fa-angle-right me-2" /> About</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Careers</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Blog</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Press</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Gift Cards</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Magazine</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item d-flex flex-column">
                                    <h4 className="mb-4 text-white">Support</h4>
                                    <a href><i className="fas fa-angle-right me-2" /> Contact</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Legal Notice</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Privacy Policy</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Terms and Conditions</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Sitemap</a>
                                    <a href><i className="fas fa-angle-right me-2" /> Cookie policy</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="footer-item">
                                    <div className="row gy-3 gx-2 mb-4">
                                        <div className="col-xl-6">
                                            <form>
                                                <div className="form-floating">
                                                    <select className="form-select bg-dark border" id="select1">
                                                        <option value={1}>Arabic</option>
                                                        <option value={2}>German</option>
                                                        <option value={3}>Greek</option>
                                                        <option value={3}>New York</option>
                                                    </select>
                                                    <label htmlFor="select1">English</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-xl-6">
                                            <form>
                                                <div className="form-floating">
                                                    <select className="form-select bg-dark border" id="select1">
                                                        <option value={1}>USD</option>
                                                        <option value={2}>EUR</option>
                                                        <option value={3}>INR</option>
                                                        <option value={3}>GBP</option>
                                                    </select>
                                                    <label htmlFor="select1">$</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <h4 className="text-white mb-3">Payments</h4>
                                    <div className="footer-bank-card">
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-amex fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-visa fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fas fa-credit-card fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x" /></a>
                                        <a href="#" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x" /></a>
                                        <a href="#" className="text-white"><i className="fab fa-cc-discover fa-2x" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid copyright text-body py-4">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-end mb-md-0">
                                <i className="fas fa-copyright me-2" /><a className="text-white" href="#">Your Site Name</a>, All right reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-start">
                                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                                Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"><i className="fa fa-arrow-up" /></a>
            </div>



        </div>
    )
}

export default page
