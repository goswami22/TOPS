import React from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AFooter from '../Acommon/AFooter'
import UseCustompost from '../../../UseCustompost'
import UseCustomDelete from '../../../UseCustomDelete'

function AddServices() {

    const {apiData,getapiData,submitData } = UseCustompost('http://localhost:3000/services', {
        id: '',
        title: '',
        des: '',
        icon: ''
    },
    '/AServices')

    return (
        <div>

            <Aheader />
            <Ahero title="Add Services" page="Services" />

            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-10 mx-auto text-center">
                            <h1 className="text-white mb-3">Add Services</h1>
                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={submitData} >
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='title' value={apiData.title} onChange={getapiData} className="form-control bg-white border-0" id="title" placeholder="Your Title" />
                                            <label htmlFor="title">Your Title</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='icon' value={apiData.icon} onChange={getapiData} className="form-control bg-white border-0" id="icon" placeholder="fas fa-user" />
                                            <label htmlFor="icon">icon class (fas fa-user)</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <textarea name="des" value={apiData.des} onChange={getapiData} className="form-control bg-white border-0" id="description" placeholder="Your Description"></textarea>
                                            <label htmlFor="description">Your Description</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Travel Guide</button>
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

export default AddServices
