import React, { useState } from 'react'

export default function FormFunObj() {

    const [formdata, setformdata] = useState({
        fname : "",
        lname : "",
        email : "",
        password : ""
    })

    const getformdata = (e)=>{
        setformdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }


    console.log(formdata)

    return (
        <div>
            <div className='container mt-5'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" name="fname" onChange={getformdata} value={formdata.fname} className="form-control" id="fname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Last name</label>
                        <input type="text" name="lname" onChange={getformdata} value={formdata.lname} className="form-control" id="lname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" onChange={getformdata} value={formdata.email} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="password" onChange={getformdata} name="password" value={formdata.password} className="form-control" id="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
