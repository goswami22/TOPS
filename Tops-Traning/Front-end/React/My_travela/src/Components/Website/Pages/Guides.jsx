import React, { useEffect } from 'react'
import Header from '../Comm/Header'
import Hero from '../Comm/Hero'
import Subscribe from '../Comm/Subscribe'
import Footer from '../Comm/Footer'
import UseCustomHooks from '../../../UseCustomHooks'

function TravelGuides() {


    useEffect(() => {
        fetchApi()
    }, [])

    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/TravelGuid')


    return (
        <div>
            <Header />
            <Hero title="Our  Travel Guides" page='Our Travel Guides' />


            {/* Travel Guide Start */}
            <div className="container-fluid guide py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">Travel Guide</h5>
                        <h1 className="mb-0">Meet Our Guide</h1>
                    </div>
                    <div className="row g-4">
                        {
                            api && api.map((item, index) => {
                                return (
                                    <div className="col-md-6 col-lg-3" key={item.id}>
                                        <div className="guide-item">
                                            <div className="guide-img">
                                                <div className="guide-img-efects">
                                                    <img src={item.image} className="img-fluid w-100 rounded-top" alt="Image" />
                                                </div>
                                                <div className="guide-icon rounded-pill p-2">
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                    <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="guide-title text-center rounded-bottom p-4">
                                                <div className="guide-title-inner">
                                                    <h4 className="mt-3">{item.title}</h4>
                                                    <p className="mb-0">{item.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="col-md-6 col-lg-3">
                            <div className="guide-item">
                                <div className="guide-img">
                                    <div className="guide-img-efects">
                                        <img src="img/guide-2.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    </div>
                                    <div className="guide-icon rounded-pill p-2">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href="#">
                                        <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="guide-title text-center rounded-bottom p-4">
                                    <div className="guide-title-inner">
                                        <h4 className="mt-3">Full Name</h4>
                                        <p className="mb-0">Designation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="guide-item">
                                <div className="guide-img">
                                    <div className="guide-img-efects">
                                        <img src="img/guide-3.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    </div>
                                    <div className="guide-icon rounded-pill p-2">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="guide-title text-center rounded-bottom p-4">
                                    <div className="guide-title-inner">
                                        <h4 className="mt-3">Full Name</h4>
                                        <p className="mb-0">Designation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="guide-item">
                                <div className="guide-img">
                                    <div className="guide-img-efects">
                                        <img src="img/guide-4.jpg" className="img-fluid w-100 rounded-top" alt="Image" />
                                    </div>
                                    <div className="guide-icon rounded-pill p-2">
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                                <div className="guide-title text-center rounded-bottom p-4">
                                    <div className="guide-title-inner">
                                        <h4 className="mt-3">Full Name</h4>
                                        <p className="mb-0">Designation</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Travel Guide End */}



            <Subscribe />
            <Footer />
        </div>
    )
}

export default TravelGuides
