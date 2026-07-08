import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

    const redirect =  useNavigate()


    useEffect(()=>{
        if(localStorage.getItem('uid')){
            redirect('/')
        }
    })

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const setData = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitData =  async (e) =>  {
        e.preventDefault()

        const {email, password} = form;

        if(email == '' || password == ''){
            toast.error('Plase fill fields')
            return false
        }


        try {
            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            if(res.data.lenght === 0){
                toast.error('Email not found')
                return false
            }

            const user = res.data[0]
            console.log(user)

            if(password != user.password) {
                toast.error('password Does not match')
                return false
            }

            // Status
            if(user.status == 'block'){
                toast.error('Account has been blocked...')
                return false
            }

            localStorage.setItem('uid', user.id)
            localStorage.setItem('uname', user.name)
            toast.success('login Successfull')
            redirect('/')

        } catch (error) {
            toast.error('API Not Found')
        }
    }



    return (
        <div>
            <section
                className="login-section d-flex align-items-center"
                style={{
                    minHeight: "100vh",
                    background:
                        "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/img/carousel-2.jpg') center/cover no-repeat",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Side */}
                        <div className="col-lg-6 text-white d-none d-lg-block">
                            <h1 className="display-3 fw-bold text-white">
                                Welcome Back
                            </h1>

                            <p className="lead mt-3">
                                Login to manage your travel bookings and explore amazing destinations with Travela.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="col-lg-5 mx-auto">

                            <div className="card border-0 shadow-lg p-5" style={{ borderRadius: "20px", backdropFilter: "blur(12px)", background: "rgba(255,255,255,.95)" }}>

                                <h2 className="text-center fw-bold mb-4">
                                    Login
                                </h2>

                                <form onSubmit={submitData}>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold"> Email Address </label>
 
                                        <input type="email" name='email' value={form.email} onChange={setData}  className="form-control form-control-lg" placeholder="Enter Email" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Password</label>

                                        <input type="password" name='password' value={form.password} onChange={setData}  className="form-control form-control-lg" placeholder="Enter Password" />
                                    </div>

                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="remember" />
                                            <label htmlFor="remember" className="form-check-label" >Remember Me</label>
                                        </div>
                                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                                    </div>

                                    <button className="btn w-100 text-white py-3" style={{ background: "#13357B", borderRadius: "10px" }}>Login</button>
                                    
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
