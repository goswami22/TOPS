import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AFooter from '../Acommon/AFooter'
import UseCustompost from '../../../UseCustompost'
import UseCustomDelete from '../../../UseCustomDelete'
import { toast } from 'react-toastify';

function AddGallery() {
    // Add Data 
    useEffect(()=>{
        submitData()
    })
    const {apiData,getapiData,submitData} = UseCustompost('http://localhost:3000/gallery', {
        id: '',
        name: '',
        image: '',
        category: ''
    },
    '/Agallery')



    return (
        <div>
            <Aheader />
            <Ahero />

            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-10 mx-auto text-center">
                            <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={submitData}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='name' value={apiData.name} onChange={getapiData} className="form-control bg-white border-0" id="name" placeholder="Your Tour Name" />
                                            <label htmlFor="name">Your Tour Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="url" name='image' value={apiData.image} onChange={getapiData} className="form-control bg-white border-0" id="image" placeholder="Add Image Link" />
                                            <label htmlFor="image">Add Image Link</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <select name='category' value={apiData.category} onChange={getapiData} className="form-select bg-white border-0" id="select1">
                                                <option hidden> Select Here </option>
                                                <option value='WorldTour'>WorldTour</option>
                                                <option value='OceanTour'>OceanTour</option>
                                                <option value='SummerTour'>SummerTour</option>
                                                <option value='SportTour'>SportTour</option>
                                            </select>
                                            <label htmlFor="select1">Category</label>
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

export default AddGallery
