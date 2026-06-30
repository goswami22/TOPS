import React, { useEffect } from 'react'
import Aheader from '../Acommon/Aheader'
import AFooter from '../Acommon/AFooter'
import Ahero from '../Acommon/Ahero'
import UseCustomHooks from '../../../UseCustomHooks'
import UseCustompost from '../../../UseCustompost'

function AddTravelGuides() {


    const { apiData, getapiData, submitData } = UseCustompost('http://localhost:3000/TravelGuid', {
        id: '',
        image: '',
        name: '',
        designation: '',
    },
    '/AtravelGuid')





    return (
        <div>
            <Aheader />
            <Ahero />


            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-10 mx-auto text-center">
                            <h1 className="text-white mb-3">Travel Guides</h1>
                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={submitData}> 
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='name' value={apiData.name} onChange={getapiData} className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="url" name='image' value={apiData.image} onChange={getapiData} className="form-control bg-white border-0" id="image" placeholder="Your image" />
                                            <label htmlFor="email">Your image</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='designation' value={apiData.designation} onChange={getapiData} className="form-control bg-white border-0" id="designation" placeholder="Your designation" />
                                            <label htmlFor="email">Your designation</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <AFooter />
        </div>

    )
}

export default AddTravelGuides
