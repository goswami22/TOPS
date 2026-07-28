import React, { useEffect } from 'react'
import { TiArrowRight } from "react-icons/ti";
import Header from '../Comm/Header'
import Hero from '../Comm/Hero'
import Subscribe from '../Comm/Subscribe'
import Footer from '../Comm/Footer'
import UseCoustomCategory from '../../../UseCoustomCategory';

function Gallary() {

    useEffect(() => {
        fetchdata()
    },[])

    const { dataCategory, fetchdata } = UseCoustomCategory('http://localhost:3000/gallery')

    return (
        <div>
            <Header />
            <Hero title="Our Gallary" page='Our Gallary' />

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
                            <a onClick={()=> fetchdata('')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                                <span className="text-dark" style={{ width: 150 }}>All</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> fetchdata('category=WorldTour')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                                <span className="text-dark" style={{ width: 150 }}>World tour</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> fetchdata('category=OceanTour')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                                <span className="text-dark" style={{ width: 150 }}>Ocean Tour</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> fetchdata('category=SummerTour')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                                <span className="text-dark" style={{ width: 150 }}>Summer Tour</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=> fetchdata('category=SportTour')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                                <span className="text-dark" style={{ width: 150 }}>Sport Tour</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-2">
                                {
                                    dataCategory && dataCategory.map((item,index) => {
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


            <Subscribe />
            <Footer />
        </div>
    )
}

export default Gallary
