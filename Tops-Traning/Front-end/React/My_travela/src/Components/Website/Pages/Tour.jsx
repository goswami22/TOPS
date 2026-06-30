import React, { useEffect } from 'react'
import Header from '../Comm/Header'
import Hero from '../Comm/Hero'
import Subscribe from '../Comm/Subscribe'
import Footer from '../Comm/Footer'
import UseCoustomCategory from '../../../UseCoustomCategory'


function Tour() {


    useEffect(() => {
        fetchdata('category=National')
    }, [])

    const { dataCategory, fetchdata } = UseCoustomCategory(`http://localhost:3000/tour`)


    return (
        <div>

            <Header />
            <Hero title={'Tour Category'} page={'Category'} />

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
                                <a onClick={() => fetchdata('category=National')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#NationalTab-1">
                                    <span className="text-dark" style={{ width: 250 }}>National Tour Category</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => fetchdata('category=international')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#InternationalTab-2">
                                    <span className="text-dark" style={{ width: 250 }}>International tour Category</span>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    {

                                        dataCategory && dataCategory.map((item, index) => {
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



            <Subscribe />
            <Footer />

        </div>
    )
}

export default Tour
