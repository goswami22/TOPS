import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AFooter from '../Acommon/AFooter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function AddBlog() {

    const redirect = useNavigate()



    const [blogdata, setBlogdata] = useState({
        id: '',
        image: '',
        date: '',
        post: '',
        title: '',
        dis: ''
    })

    const getData = (e) => {
        setBlogdata({
            ...blogdata,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/blogs', blogdata)
            setBlogdata({
                id: '',
                image: '',
                date: '',
                post: '',
                title: '',
                dis: '',
            })
            redirect('/AdminBlog')
            toast.success('Data add Successfully')
        } catch (error) {
            console.log("API Not Found", error)
        }

    }





    return (
        <div>

            <Aheader />
            <Ahero title={'Add Blog'} page={'Blog'} />

            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h5 className="section-booking-title pe-3">Booking</h5>
                            <h1 className="text-white mb-4">Online Booking</h1>
                            <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                            </p>
                            <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                            </p>
                            <a href="#" className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            <p className="text-white mb-4">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='title' value={blogdata.title} onChange={getData} className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="url" name='image' value={blogdata.image} onChange={getData} className="form-control bg-white border-0" id="email" placeholder="Your Email" />
                                            <label htmlFor="image">Your Image</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" name='date' value={blogdata.date} onChange={getData} className="form-control bg-white border-0" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                            <label htmlFor="datetime">Date &amp; Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" name='post' value={blogdata.post} onChange={getData} className="form-control bg-white border-0" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                            <label htmlFor="datetime">Post</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control bg-white border-0" name='dis' value={blogdata.dis} onChange={getData} placeholder="Special Request" id="message" style={{ height: 100 }} defaultValue={""} />
                                            <label htmlFor="message">Discription</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary text-white w-100 py-3" type="submit">Add Blog</button>
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

export default AddBlog
