import React, { useEffect, useState } from 'react'

import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import AdminFooter from '../Acommon/AFooter'
import UseCustomHooks from '../../../UseCustomHooks'
import axios from 'axios'
import { toast } from 'react-toastify'

function AdminDash() {

  useEffect(() => {
    fetchApi()
  }, [])

  const { api, fetchApi } = UseCustomHooks('http://localhost:3000/users')

  const [user, setUsers] = useState({})



  const toggleStatus = async (item) => {
    try {
        const newstatus = item.status === 'block' ? 'unblock' : 'block'

        await axios.patch(`http://localhost:3000/users/${item.id}`, {
          status: newstatus
        })
        fetchApi()
    } catch (error) {
      toast.error('DAta Not Found')
    }
  }





  return (
    <div>
      <Aheader />
      <Ahero title={'Admin Dashboard'} page={'Dashboard'} />

      <section className="container sectionSpace">
        <div className="row">
          {
            <table className="table table-hover table-bordered">
              <thead>
                <tr className='text-center'>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  api && api.map((item, index) => {
                    return (
                      <tr key={index} className='text-center'>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.status}</td>

                        {/* action button */}
                        <td >

                          <button className={item.status === 'block' ? 'btn btn-success' : 'btn btn-danger'} onClick={() => toggleStatus(item)}>{
                            item.status === 'block' ? 'unblock' : 'block'}</button>

                          {/* modal */}
                          <div className="modal fade" id={`destinationview${item.id}`} tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog  modal-lg">
                              <div className="modal-content">
                                <div className="modal-body">
                                  <div className="row g-4 justify-content-center">
                                    <div className="col-md-12">
                                      <div className="blog-item">
                                        <div className="blog-img">
                                          <div className="blog-img-inner">
                                            <img className="img-fluid w-100 rounded-top" src={item.image} alt="Image" />
                                          </div>
                                        </div>
                                        <div className="blog-content text-start border border-top-0 rounded-bottom p-4">

                                          <a href="#" className="h4 text-capitalize mb-4 d-inline-block ">{item.title}</a>
                                          <p>{item.category}</p>
                                          {/* <a href="#" className="btn btn-primary rounded-pill py-2 px-4">View all place <FaArrowRight /></a> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          }
        </div>
      </section>

      <AdminFooter />

    </div>
  )
}

export default AdminDash
