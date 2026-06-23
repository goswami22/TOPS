import React from 'react'
import Subscribe from '../Comm/Subscribe'
import Header from '../Comm/Header'
import Footer from '../Comm/Footer'
import Hero from '../Comm/Hero'

function Services() {
    return (
        <div>
            <div>
                <Header/>

                {/* hero start */}
               <Hero title="Services Us" page="Services" />
                {/* hero End */}
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
                {/* Testimonial Start */}
                <div className="container-fluid testimonial py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Testimonial</h5>
                            <h1 className="mb-0">Our Clients Say!!!</h1>
                        </div>
                        <div className="testimonial-carousel owl-carousel">
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Subscribe start */}
                <Subscribe />
                {/* Subscribe end */}
                {/* Footer Start */}
                <Footer/>
                {/* Footer End */}
            </div>

        </div>
    )
}

export default Services
