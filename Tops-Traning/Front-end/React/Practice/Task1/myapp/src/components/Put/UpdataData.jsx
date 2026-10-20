
import React, { useState } from 'react'
import axios from 'axios'


const UpdataData = () => {
  
  const [updateData, setUpdateData] =  useState({
    id: '',
    fname : '',
    lname : '',
    phone: '',
    email: ''
  })

  const getData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value
    })
  }
  
  const submitData = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/person/${updateData.id}`, updateData)
      alert("Data SuccessFully Updated")
      console.log(res.data)
    } catch (error) {
      console.log("Api not Found", error)    
    }
  }
  
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7">

          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
              <h3 className="mb-1 fw-bold">Update User Data</h3>
              <p className="mb-0 small">
                Update your personal information
              </p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form onSubmit={submitData}>
                <div className="row g-4">

                  <div className="col-md-6">
                    <label htmlFor="fname" className="form-label fw-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fname" name='fname' value={updateData.fname} onChange={getData}
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="lname" className="form-label fw-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="lname" name='lname' value={updateData.lname} onChange={getData}
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email" name='email' value={updateData.email} onChange={getData}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone" name='phone' value={updateData.phone} onChange={getData}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="col-12 d-flex flex-column flex-sm-row gap-3 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex-grow-1"
                    >
                      Update Data
                    </button>

                    <button
                      type="reset"
                      className="btn btn-outline-secondary btn-lg"
                    >
                      Reset
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

          <p className="text-center text-secondary small mt-3">
            Please check your information before updating.
          </p>

        </div>
      </div>
    </div>
  )
}

export default UpdataData
