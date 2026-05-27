import React, { useState } from 'react'

export default function FormObj() {


    const [formdata,setformdata] = useState({
        fname : "",
        lname : "",
        email : "",
        password : ""
    })
    console.log(formdata)


    return (
        <div className='container mt-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" value={formdata.fname} onChange={(e)=> setformdata({...formdata, fname:e.target.value})} className="form-control"  id="fname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last name</label>
                    <input type="text" value={formdata.lname} onChange={(e)=> setformdata({...formdata, lname:e.target.value})} className="form-control"  id="lname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" value={formdata.email} onChange={(e)=> setformdata({...formdata, email:e.target.value})} className="form-control"  id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" value={formdata.password} onChange={(e)=> setformdata({...formdata, password:e.target.value})} className="form-control"  id="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
