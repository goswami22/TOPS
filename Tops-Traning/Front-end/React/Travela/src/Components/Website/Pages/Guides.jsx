import React, { useEffect } from 'react'
import Header from '../Comm/Header'
import Hero from '../Comm/Hero'
import Subscribe from '../Comm/Subscribe'
import Footer from '../Comm/Footer'
import UseCustomHooks from '../../../UseCustomHooks'

function Guides() {

    useEffect(()=>{
        fetchApi()
    },[])

    const {api, fetchApi} = UseCustomHooks('http://localhost:3000/TravelGuid')


    return (
        <div>
            <Header />
            <Hero title="Our Travel Guides" page="Guides" />


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
                                    <div key={item.id} className="col-md-6 col-lg-3">
                                        <div className="guide-item">
                                            <div className="guide-img">
                                                <div className="guide-img-efects">
                                                    <img src={item.image} className="img-fluid w-100 rounded-top" alt="Image" />
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
                                                    <h4 className="mt-3">{item.name}</h4>
                                                    <p className="mb-0">{item.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Subscribe />
            <Footer />
        </div>
    )
}

export default Guides
