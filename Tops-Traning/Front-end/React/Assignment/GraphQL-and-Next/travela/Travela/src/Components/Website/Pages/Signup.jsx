import axios from "axios";
import React, { useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {

    const redirect = useNavigate()

    const [form, setForm] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        status: ''
    })

    const setData = (e) => {
        setForm({
            ...form,
            id: new Date().getTime().toString(),
            status: 'unblock',
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) => {
        e.preventDefault();

        const { name, email, password } = form

        if (name == '' || email == '' || password == '') {
            toast.error('Please full fields')
            return false
        }

        try {
            const res = await axios.post('http://localhost:3000/users', form)
            toast.success('Signup Successfully')
            redirect('/Alogin')
            setForm({
                id: '',
                name: '',
                email: '',
                password: '',
            })
        } catch (error) {
            toast.error('API not Found')
        }
    }



    return (
        <div>
            <section className="signuppage d-flex align-items-center"
                style={{
                    minHeight: "100vh",
                    background:
                        "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('/img/carousel-2.jpg') center/cover no-repeat",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Content */}
                        <div className="col-lg-6 d-none d-lg-block text-white">
                            <h1 className="display-3 fw-bold text-white">
                                Create Admin Account
                            </h1>

                            <p className="lead mt-3">
                                Join Travela and manage your tours, destinations,
                                bookings and customers from one place.
                            </p>
                        </div>

                        {/* Signup Card */}
                        <div className="col-lg-5 mx-auto">

                            <div
                                className="card border-0 shadow-lg p-5"
                                style={{
                                    borderRadius: "20px",
                                    background: "rgba(255,255,255,.95)",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                <h2 className="text-center fw-bold mb-4">
                                    Sign Up
                                </h2>

                                <form onSubmit={submitData}>

                                    {/* Name */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Full Name</label>

                                        <input type="text" name="name" value={form.name} onChange={setData} className="form-control form-control-lg" placeholder="Enter Full Name" />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Email Address</label>

                                        <input type="email" name="email" value={form.email} onChange={setData} className="form-control form-control-lg" placeholder="Enter Email" />
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Password</label>

                                        <input type="password" name="password" value={form.password} onChange={setData} className="form-control form-control-lg" placeholder="Enter Password" /></div>



                                    {/* Button */}
                                    <button className="btn text-white w-100 py-3"
                                        style={{ background: "#13357B", borderRadius: "10px", }}>Create Account</button>

                                    <div className="text-center mt-4">
                                        Already have an account?

                                        <Link to="/Login" className="ms-2 text-decoration-none fw-bold" style={{ color: "#13357B" }}>
                                            Login
                                        </Link>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;