import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AFooter from '../Acommon/AFooter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddTour() {


    // const { form, getSubmit, getData } = UseFormhandling({
    //     id: '',
    //     tilte: '',
    //     image: '',
    //     category: ''
    // },)


    const redirect = useNavigate()

    const [form, setForm] = useState({
        id: '',
        tilte: '',
        image: '',
        category: ''
    })


    const getData = (e)=> {
        setForm({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const getSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/tour', form)
            setForm({
                id: "",
                title: "",
                image: "",
                category: ""
            })
            redirect('/Atour')
        } catch (error) {
            console.log("API Not Found", error)
        }
    }





    return (
        <div>
            <Aheader />
            <Ahero title='Add Tour' page='Tour' />

            <div className="container-fluid booking py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">

                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                            <form onSubmit={getSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" name='title' value={form.title} onChange={getData} className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input
                                                type="url"
                                                name='image'
                                                value={form.image}
                                                onChange={getData}
                                                className="form-control bg-white border-0"
                                                id="img"
                                                placeholder="Your img"
                                            />
                                            <label htmlFor="img">Your image</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <select name='category' value={form.category} onChange={getData} className="form-select bg-white border-0" id="select1">
                                                <option value='national'>national</option>
                                                <option value='international'>international</option>
                                            </select>
                                            <label htmlFor="select1">Destination</label>
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

export default AddTour
