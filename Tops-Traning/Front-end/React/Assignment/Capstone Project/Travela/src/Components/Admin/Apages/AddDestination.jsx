import React from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AFooter from '../Acommon/AFooter'
import UseCustompost from '../../../UseCustompost'
import axios from 'axios'


function AddDestination() {

    const {apiData,getapiData,submitData} = UseCustompost('http://localhost:3000/destination', {
        id: '',
        image :'',
        title: '',
        category: ''
    },
    '/Adesination'
) 


    return (
        <div>
            <Aheader />
            <Ahero title={'Manage Destination'} page={'Destination'}/>

            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={submitData}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input name='title' value={apiData.title} onChange={getapiData} type="text" className="form-control bg-white border-0" id="title" placeholder="Your Title" />
                                            <label htmlFor="title">Your Title</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="url" name='image' value={apiData.image} onChange={getapiData} className="form-control bg-white border-0" id="image" placeholder="Your iamge" />
                                            <label htmlFor="image">Your image</label>
                                        </div>

                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <select name='category' value={apiData.category} onChange={getapiData} className="form-select bg-white border-0" id="select1">
                                                <option hidden>-- Select me ---</option>
                                                <option value='USA'>USA</option>
                                                <option value='Canada'>Canada</option>
                                                <option value='Europe'>Europe</option>
                                                <option value='China'>China</option>
                                                <option value='Singapore'>Singapore</option>
                                            </select>
                                            <label htmlFor="select1">Catagory</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Destionation</button>
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

export default AddDestination
