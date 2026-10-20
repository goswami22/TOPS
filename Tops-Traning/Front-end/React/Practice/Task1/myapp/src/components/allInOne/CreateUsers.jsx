import axios from 'axios'
import React, { useState } from 'react'
import Header from '../Header'


const CreateUsers = () => {


    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        address: ''
    })

    const getData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const createData = async (e) => {
        e.preventDefault()
        try {
            const url = 'https://6a057850aa826ca75c09e2bd.mockapi.io/Users'
            const res = await axios.post(url, user)
            console.log(res.data)
            setUser({
                name: '',
                email: '',
                phone: '',
                age: '',
                address: ''
            })
            alert('Data Successfully created')
        } catch (error) {
            alert("API Data Not Found")
        }
    }

    

    return (
        <div className="container-fluid py-5 min-vh-100 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7">

                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                            {/* Card Header */}
                            <div className="card-header bg-success text-white text-center py-4 border-0">
                                <div
                                    className="bg-white text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                    style={{ width: '65px', height: '65px', fontSize: '30px' }}
                                >
                                    <i className="bi bi-person-plus-fill"></i>
                                </div>

                                <h3 className="fw-bold mb-2">Create New User</h3>
                                <p className="mb-0 text-white-50">
                                    Enter the details below to register a new user
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="card-body p-4 p-md-5">
                                <form onSubmit={createData}>

                                    <div className="row g-4">

                                        {/* Name */}
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label fw-semibold">
                                                Full Name <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-person"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    id="name" name='name' value={user.name} onChange={getData}
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label fw-semibold">
                                                Email Address <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-envelope"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    id="email" name='email' value={user.email} onChange={getData}
                                                    className="form-control"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label fw-semibold">
                                                Phone Number
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-telephone"></i>
                                                </span>
                                                <input
                                                    type="tel"
                                                    id="phone" name='phone' value={user.phone} onChange={getData}
                                                    className="form-control"
                                                    placeholder="Enter your phone"
                                                />
                                            </div>
                                        </div>

                                        {/* Age */}
                                        <div className="col-md-6">
                                            <label htmlFor="age" className="form-label fw-semibold">
                                                Age
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light">
                                                    <i className="bi bi-calendar3"></i>
                                                </span>
                                                <input
                                                    type="number"
                                                    id="age" name='age' value={user.age} onChange={getData}
                                                    className="form-control"
                                                    placeholder="Enter your age"
                                                    min="1"
                                                    max="120"
                                                />
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="col-12">
                                            <label htmlFor="address" className="form-label fw-semibold">
                                                Address
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-light align-items-start pt-3">
                                                    <i className="bi bi-geo-alt"></i>
                                                </span>
                                                <textarea
                                                    id="address" name='address' value={user.address} onChange={getData}
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="Enter your full address"
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="col-12 pt-2">
                                            <div className="d-flex flex-column flex-sm-row gap-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-success btn-lg flex-grow-1 fw-semibold"
                                                >
                                                    <i className="bi bi-person-plus-fill me-2"></i>
                                                    Create User
                                                </button>

                                                <button
                                                    type="reset" 
                                                    onClick={()=> setUser({
                                                        name: '',
                                                        age: '',
                                                        email : '',
                                                        phone: '',
                                                        address : ''
                                                    })}
                                                    className="btn btn-outline-secondary btn-lg px-4"
                                                >
                                                    <i className="bi bi-arrow-counterclockwise me-2"></i>
                                                    Reset
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div className="card-footer bg-white text-center py-3 border-top">
                                <small className="text-secondary">
                                    <i className="bi bi-shield-check me-1 text-success"></i>
                                    Please verify the information before submitting.
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUsers