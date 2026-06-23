import React from 'react'
import Header from '../Comm/Header'
import Carousel from '../Comm/Carousel'
import Footer from '../Comm/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Carousel />

            {/* common content start */}

            <div>
                {/* About Start */}
                <div className="container-fluid about py-5">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5">
                                <div className="h-100" style={{ border: '50px solid', borderColor: 'transparent #13357B transparent #13357B' }}>
                                    <img src="img/about-img.jpg" className="img-fluid w-100 h-100" alt />
                                </div>
                            </div>
                            <div className="col-lg-7" style={{ background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)' }}>
                                <h5 className="section-about-title pe-3">About Us</h5>
                                <h1 className="mb-4">Welcome to <span className="text-primary">Travela</span></h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />First Class Flights</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Handpicked Hotels</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />5 Star Accommodations</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Latest Model Vehicles</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />150 Premium City Tours</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />24/7 Service</p>
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Services Start */}
                <div className="container-fluid bg-light service py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Searvices</h5>
                            <h1 className="mb-0">Our Services</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                            <div className="service-content text-end">
                                                <h5 className="mb-4">WorldWide Tours</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                            <div className="service-icon p-4">
                                                <i className="fa fa-globe fa-4x text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                                            <div className="service-content text-end">
                                                <h5 className="mb-4">Hotel Reservation</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                            <div className="service-icon p-4">
                                                <i className="fa fa-hotel fa-4x text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                            <div className="service-content text-end">
                                                <h5 className="mb-4">Travel Guides</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                            <div className="service-icon p-4">
                                                <i className="fa fa-user fa-4x text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                            <div className="service-content text-end">
                                                <h5 className="mb-4">Event Management</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                            <div className="service-icon p-4">
                                                <i className="fa fa-cog fa-4x text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                            <div className="service-icon p-4">
                                                <i className="fa fa-globe fa-4x text-primary" />
                                            </div>
                                            <div className="service-content">
                                                <h5 className="mb-4">WorldWide Tours</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                            <div className="service-icon p-4">
                                                <i className="fa fa-hotel fa-4x text-primary" />
                                            </div>
                                            <div className="service-content">
                                                <h5 className="mb-4">Hotel Reservation</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                            <div className="service-icon p-4">
                                                <i className="fa fa-user fa-4x text-primary" />
                                            </div>
                                            <div className="service-content">
                                                <h5 className="mb-4">Travel Guides</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                                            <div className="service-icon p-4">
                                                <i className="fa fa-cog fa-4x text-primary" />
                                            </div>
                                            <div className="service-content">
                                                <h5 className="mb-4">Event Management</h5>
                                                <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Service More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services End */}
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
                                                        <img className="img-fluid rounded w-100" src="img/destination-1.jpg" alt />
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
                {/* Explore Tour Start */}
                <div className="container-fluid ExploreTour py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Explore Tour</h5>
                            <h1 className="mb-4">The World</h1>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                            </p>
                        </div>
                        <div className="tab-class text-center">
                            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                        <span className="text-dark" style={{ width: 250 }}>National Tour Category</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                        <span className="text-dark" style={{ width: 250 }}>International tour Category</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Weekend Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Holiday Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Road Trip</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="tour-offer bg-info">15% Off</div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Historical Trip</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Family Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="tour-offer bg-warning">50% Off</div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="national-item">
                                                <img src="img/explore-tour-6.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                                <div className="national-content">
                                                    <div className="national-info">
                                                        <h5 className="text-white text-uppercase mb-2">Beach Tour</h5>
                                                        <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                    </div>
                                                </div>
                                                <div className="national-plus-icon">
                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="InternationalTab-2" className="tab-pane fade show p-0">
                                    <div className="InternationalTour-carousel owl-carousel">
                                        <div className="international-item">
                                            <img src="img/explore-tour-1.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Australia</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 8 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>143+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="tour-offer bg-success">30% Off</div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Germany</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 12 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>21+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-3.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="tour-offer bg-warning">45% Off</div>
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Spain</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 9 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>133+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-4.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">Japan</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 8 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>137+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                        <div className="international-item">
                                            <img src="img/explore-tour-5.jpg" className="img-fluid w-100 rounded" alt="Image" />
                                            <div className="international-content">
                                                <div className="tour-offer bg-info">70% Off</div>
                                                <div className="international-info">
                                                    <h5 className="text-white text-uppercase mb-2">London</h5>
                                                    <a href="#" className="btn-hover text-white me-4"><i className="fas fa-map-marker-alt me-1" /> 17 Cities</a>
                                                    <a href="#" className="btn-hover text-white"><i className="fa fa-eye ms-2" /> <span>26+ Tour Places</span></a>
                                                </div>
                                            </div>
                                            <div className="international-plus-icon">
                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Explore Tour Start */}
                {/* Packages Start */}
                <div className="container-fluid packages py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Packages</h5>
                            <h1 className="mb-0">Awesome Packages</h1>
                        </div>
                        <div className="packages-carousel owl-carousel">
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="img/packages-4.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Venice - Italy</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
                                    </div>
                                    <div className="packages-price py-2 px-4">$349.00</div>
                                </div>
                                <div className="packages-content bg-light">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Venice - Italy</h5>
                                        <small className="text-uppercase">Hotel Deals</small>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                                    </div>
                                    <div className="row bg-primary rounded-bottom mx-0">
                                        <div className="col-6 text-start px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                                        </div>
                                        <div className="col-6 text-end px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="img/packages-2.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Venice - Italy</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
                                    </div>
                                    <div className="packages-price py-2 px-4">$449.00</div>
                                </div>
                                <div className="packages-content bg-light">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">The New California</h5>
                                        <small className="text-uppercase">Hotel Deals</small>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                                    </div>
                                    <div className="row bg-primary rounded-bottom mx-0">
                                        <div className="col-6 text-start px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                                        </div>
                                        <div className="col-6 text-end px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="img/packages-3.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Venice - Italy</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
                                    </div>
                                    <div className="packages-price py-2 px-4">$549.00</div>
                                </div>
                                <div className="packages-content bg-light">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Discover Japan</h5>
                                        <small className="text-uppercase">Hotel Deals</small>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                                    </div>
                                    <div className="row bg-primary rounded-bottom mx-0">
                                        <div className="col-6 text-start px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                                        </div>
                                        <div className="col-6 text-end px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="packages-item">
                                <div className="packages-img">
                                    <img src="img/packages-1.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />Thayland</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />3 days</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />2 Person</small>
                                    </div>
                                    <div className="packages-price py-2 px-4">$649.00</div>
                                </div>
                                <div className="packages-content bg-light">
                                    <div className="p-4 pb-0">
                                        <h5 className="mb-0">Thayland Trip</h5>
                                        <small className="text-uppercase">Hotel Deals</small>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo quia quae illum aperiam fugiat voluptatem repellat</p>
                                    </div>
                                    <div className="row bg-primary rounded-bottom mx-0">
                                        <div className="col-6 text-start px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Read More</a>
                                        </div>
                                        <div className="col-6 text-end px-0">
                                            <a href="#" className="btn-hover btn text-white py-2 px-4">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Packages End */}
                {/* Gallery Start */}
                <div className="container-fluid gallery py-5 my-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">Our Gallery</h5>
                        <h1 className="mb-4">Tourism &amp; Traveling Gallery.</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                        </p>
                    </div>
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                                    <span className="text-dark" style={{ width: 150 }}>All</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                                    <span className="text-dark" style={{ width: 150 }}>World tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                                    <span className="text-dark" style={{ width: 150 }}>Ocean Tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                                    <span className="text-dark" style={{ width: 150 }}>Summer Tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                                    <span className="text-dark" style={{ width: 150 }}>Sport Tour</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-1.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-1.jpg" data-lightbox="gallery-1" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-4.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-4.jpg" data-lightbox="gallery-4" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-5.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-5.jpg" data-lightbox="gallery-5" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-6.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-6.jpg" data-lightbox="gallery-6" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-7.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-7.jpg" data-lightbox="gallery-7" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-8.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-8.jpg" data-lightbox="gallery-8" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-9.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-9.jpg" data-lightbox="gallery-9" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-10.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-10.jpg" data-lightbox="gallery-10" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-2" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-3" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-4" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="GalleryTab-5" className="tab-pane fade show p-0">
                                <div className="row g-2">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-2.jpg" data-lightbox="gallery-2" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                                        <div className="gallery-item h-100">
                                            <img src="img/gallery-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Image" />
                                            <div className="gallery-content">
                                                <div className="gallery-info">
                                                    <h5 className="text-white text-uppercase mb-2">World Tour</h5>
                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                </div>
                                            </div>
                                            <div className="gallery-plus-icon">
                                                <a href="img/gallery-3.jpg" data-lightbox="gallery-3" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery End */}
                {/* Tour Booking Start */}
                <div className="container-fluid booking py-5">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <h5 className="section-booking-title pe-3">Booking</h5>
                                <h1 className="text-white mb-4">Online Booking</h1>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                                </p>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                                </p>
                            </div></div></div></div></div>

            {/* common content end */}

            <Footer />
        </div>
    )
}

export default Home
