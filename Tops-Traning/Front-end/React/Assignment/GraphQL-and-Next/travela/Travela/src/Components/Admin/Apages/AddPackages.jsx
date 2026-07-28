import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AFooter from '../Acommon/AFooter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddPackages() {

    const redirect = useNavigate()

    const [packagedata, setPackage] = useState({
        id: '',
        image: '',
        place: '',
        person: '',
        day: '',
        price: '',
        title: '',
        hotel: '',
        dis: ''
    })

    const getData = (e) => {
        setPackage({
            ...packagedata,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/packages', packagedata)
            setPackage({
                id: '',
                image: '',
                place: '',
                person: '',
                day: '',
                price: '',
                title: '',
                hotel: '',
                dis: ''
            })
            redirect('/APackages')
        } catch (error) {
            console.log('API not Found', error)
        }

    }




    return (
        <div>
            <Aheader />
            <Ahero title='Add Packages' page='Packages' />

            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">

                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={submitData}> 
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='title' value={packagedata.title} onChange={getData} className="form-control bg-white border-0" id="title" placeholder="Your title" />
                                            <label htmlFor="title">Title</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="url" name='image' value={packagedata.image} onChange={getData} className="form-control bg-white border-0" id="image" placeholder="Your image" />
                                            <label htmlFor="image">Image Link</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating place" id="place" data-target-input="nearest">
                                            <input type="text" name='place' value={packagedata.place} onChange={getData} className="form-control bg-white border-0" id="place" placeholder="Enter Your Place" />
                                            <label htmlFor="place">Place</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-floating place" id="person" data-target-input="nearest">
                                            <input type="text" name='person' value={packagedata.person} onChange={getData} className="form-control bg-white border-0" id="person" placeholder="Enter Number of Person" />
                                            <label htmlFor="person">Enter Number of Person</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-floating day" id="day" data-target-input="nearest">
                                            <input type="text" name='day' value={packagedata.day} onChange={getData} className="form-control bg-white border-0" id="day" placeholder="Enter Your days" />
                                            <label htmlFor="days">Day</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-floating price" id="price" data-target-input="nearest">
                                            <input type="text" name='price' value={packagedata.price} onChange={getData} className="form-control bg-white border-0" id="price" placeholder="Enter Your price" />
                                            <label htmlFor="price">Price</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" name='hotel' value={packagedata.hotel} onChange={getData} className="form-control bg-white border-0" id="hotel" placeholder="Enter Your hotel name" />
                                            <label htmlFor="hotelName">Hotel Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Your Package</button>
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

export default AddPackages
