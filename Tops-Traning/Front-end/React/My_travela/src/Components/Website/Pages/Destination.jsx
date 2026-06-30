import React, { useEffect } from 'react'
import Header from '../Comm/Header'
import Hero from '../Comm/Hero'
import Subscribe from '../Comm/Subscribe'
import Footer from '../Comm/Footer'
import UseCoustomCategory from '../../../UseCoustomCategory'

function Destination() {

    useEffect(() => {
        fetchdata()
    },[])

    const {dataCategory, fetchdata} = UseCoustomCategory('http://localhost:3000/destination')



    return (
        <div>
            <Header />
            <Hero title="Travel Destination" page='Travel Destination' />
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
                                <a onClick={()=> fetchdata('')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                    <span className="text-dark" style={{ width: 150 }}>All</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> fetchdata('category=USA')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                    <span className="text-dark" style={{ width: 150 }}>USA</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> fetchdata('category=Canada')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                    <span className="text-dark" style={{ width: 150 }}>Canada</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> fetchdata('category=Europe')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                    <span className="text-dark" style={{ width: 150 }}>Europe</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> fetchdata('category=China')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                    <span className="text-dark" style={{ width: 150 }}>China</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=> fetchdata('category=Singapore')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#tab-6">
                                    <span className="text-dark" style={{ width: 150 }}>Singapore</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">

                                <div className="row g-4">

                                    {
                                        dataCategory && dataCategory.map((item, index) => {
                                            return (
                                                <div className="col-xl-4">
                                                    <div className="destination-img" key={index}>
                                                        <img className='img-fluid  rounded w-100' src={item.image}  alt />
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


            <Subscribe />
            <Footer />

        </div>
    )
}

export default Destination
