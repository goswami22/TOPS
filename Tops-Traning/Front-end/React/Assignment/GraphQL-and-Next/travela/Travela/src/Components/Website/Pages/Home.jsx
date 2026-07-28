import React, { useEffect } from 'react'
import Header from '../Comm/Header'
import Carousel from '../Comm/Carousel'
import Footer from '../Comm/Footer'
import UseCustomHooks from '../../../UseCustomHooks'
import { TiArrowRight } from "react-icons/ti";
import UseCoustomCategory from '../../../UseCoustomCategory'

function Home() {

    useEffect(() => {
        fetchApi()
        fetchdestination()
        fetchtour('category=National')
        fetchpackages()
        fetchgallery()
    }, [])

    // Services
    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/services')

    // Destination
    const {
        dataCategory: destinationdata,
        fetchdata: fetchdestination
    } = UseCoustomCategory('http://localhost:3000/destination')

    // Tour 
    const {
        dataCategory: tourdata,
        fetchdata: fetchtour
    } = UseCoustomCategory(`http://localhost:3000/tour`)

    // Packages
    const { api: packagesdata,
        fetchApi: fetchpackages
    } = UseCustomHooks('http://localhost:3000/packages')

    // Gallery
    const { dataCategory: gallerydata,
        fetchdata: fetchgallery
    } = UseCoustomCategory('http://localhost:3000/gallery')


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

                {/* Servives start */}
                <div className="container-fluid bg-light service py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Searvices</h5>
                            <h1 className="mb-0">Our Services</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    {
                                        api && api.map((item, index) => {
                                            return (
                                                <div className="col-12" key={item.id}>
                                                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                                        <div className="service-content text-end">
                                                            <h5 className="mb-4">{item.title}</h5>
                                                            <p className="mb-0">{item.des}</p>
                                                        </div>
                                                        <div className="service-icon p-4">
                                                            <i className={item.icon} />
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    {
                                        api && api.map((item, index) => {
                                            return (
                                                <div className="col-12" key={item.id}>
                                                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                                                        <div className="service-content text-end">
                                                            <h5 className="mb-4">{item.title}</h5>
                                                            <p className="mb-0">{item.des}</p>
                                                        </div>
                                                        <div className="service-icon p-4">
                                                            <i className={item.icon} />
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
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
                                    <a onClick={() => fetchdestination('')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-dark" style={{ width: 150 }}>All</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => fetchdestination('category=USA')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-dark" style={{ width: 150 }}>USA</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => fetchdestination('category=Canada')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{ width: 150 }}>Canada</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => fetchdestination('category=Europe')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{ width: 150 }}>Europe</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => fetchdestination('category=China')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{ width: 150 }}>China</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => fetchdestination('category=Singapore')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                        <span className="text-dark" style={{ width: 150 }}>Singapore</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">

                                    <div className="row g-4">

                                        {
                                            destinationdata && destinationdata.map((item, index) => {
                                                return (
                                                    <div className="col-xl-4" key={index}>
                                                        <div className="destination-img">
                                                            <img className='img-fluid  rounded w-100' src={item.image} alt />
                                                            <div className="destination-overlay p-4">
                                                                <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                <h4 className="text-white mb-2 mt-3">{item.tilte}</h4>
                                                                <p className='text-white mb-2'>{item.category}</p>
                                                                <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                            </div>
                                                            <div className="search-icon">
                                                                <a href="img/destination-9.jpg" data-lightbox="destination-4"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Destination End */}

                {/* Explore Tour Start */}
                {/* <div className="container-fluid ExploreTour py-5">
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
                </div> */}

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
                                    <a onClick={() => fetchtour('category=National')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                        <span className="text-dark" style={{ width: 250 }}>National Tour Category</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => fetchtour('category=international')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                        <span className="text-dark" style={{ width: 250 }}>International tour Category</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        {

                                            tourdata && tourdata.map((item, index) => {
                                                return (
                                                    <div className="col-md-6 col-lg-4" key={item.id}>
                                                        <div className="national-item">
                                                            <img src={item.image} className="img-fluid w-100 rounded" alt="Image" />
                                                            <div className="national-content">
                                                                <div className="national-info">
                                                                    <h5 className="text-white text-uppercase mb-2">{item.title}</h5>
                                                                    <a href="#" className="btn-hover text-white">View All Place </a>
                                                                </div>
                                                            </div>
                                                            <div className="national-plus-icon">
                                                                <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Explore Tour Start */}



                {/* Explore Tour Start */}
                {/* Packages Start */}

                <div className="container-fluid packages py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Packages</h5>
                            <h1 className="mb-0">Awesome Packages</h1>
                        </div>
                        {
                            <div className="packages-carousel">
                                <div className="row">
                                    {
                                        packagesdata && packagesdata.map((item, index) => {
                                            return (
                                                <div className="col-md-6 col-lg-4 mb-4">
                                                    <div className="packages-item" key={item.id}>
                                                        <div className="packages-img" key={item.id}>
                                                            <img src={item.image} className="img-fluid w-100 rounded-top" alt="Image" />
                                                            <div className="packages-info d-flex border border-start-0 border-end-0 position-absolute" style={{ width: '100%', bottom: 0, left: 0, zIndex: 5 }}>
                                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt me-2" />{item.place}</small>
                                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt me-2" />{item.day}</small>
                                                                <small className="flex-fill text-center py-2"><i className="fa fa-user me-2" />{item.person}</small>
                                                            </div>
                                                            <div className="packages-price py-2 px-4">{item.price}</div>
                                                        </div>
                                                        <div className="packages-content bg-light">
                                                            <div className="p-4 pb-0">
                                                                <h5 className="mb-0">{item.title}</h5>
                                                                <small className="text-uppercase">{item.hotel}</small>
                                                                <div className="mb-3">
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                    <small className="fa fa-star text-primary" />
                                                                </div>
                                                                <p className="mb-4">{item.dis.slice(0, 85)}...</p>
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
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }

                    </div>
                </div>



                {/* Packages End */}
                {/* Gallery Start */}
                {/* <div className="container-fluid gallery py-5 my-5">
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
                </div> */}

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
                                <a onClick={() => fetchgallery('')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                                    <span className="text-dark" style={{ width: 150 }}>All</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => fetchgallery('category=WorldTour')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                                    <span className="text-dark" style={{ width: 150 }}>World tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => fetchgallery('category=OceanTour')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                                    <span className="text-dark" style={{ width: 150 }}>Ocean Tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => fetchgallery('category=SummerTour')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                                    <span className="text-dark" style={{ width: 150 }}>Summer Tour</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => fetchgallery('category=SportTour')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                                    <span className="text-dark" style={{ width: 150 }}>Sport Tour</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-2">
                                    {
                                        gallerydata && gallerydata.map((item, index) => {
                                            return (
                                                <div key={item.id} className="col-sm-6 col-md-6 col-lg-4">
                                                    <div className="gallery-item h-100">
                                                        <img src={item.image} className="img-fluid w-100 h-100 rounded" alt="Image" />
                                                        <div className="gallery-content">
                                                            <div className="gallery-info">
                                                                <h5 className="text-white text-uppercase mb-2">{item.name}</h5>
                                                                <a href="#" className="btn-hover text-white">View All Place <TiArrowRight /></a>
                                                            </div>
                                                        </div>
                                                        <div className="gallery-plus-icon">
                                                            <a href="img/gallery-1.jpg" data-lightbox="gallery-1" className="my-auto"><i className="fas fa-plus fa-2x text-white" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

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
