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
                        <h3 className="text-white display-3 mb-4">Our Gallery</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">Gallery</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
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
