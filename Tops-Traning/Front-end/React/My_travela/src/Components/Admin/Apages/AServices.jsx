import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import AFooter from '../Acommon/AFooter'
import { FaArrowRight } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import UseCustomDelete from '../../../UseCustomDelete'

function AServices() {


    const [services, setServices] = useState([])

    useEffect(() => {
        getSetvices()
    })


    const getSetvices = async () => {
        try {
            const res = await axios.get('http://localhost:3000/services')
            setServices(res.data)
        } catch (err) {
            console.log('API is NOT Found', err)
        }
    }

    
    const {deleteData} = UseCustomDelete('http://localhost:3000/services')
    getSetvices()


    return (
        <div>
            <Aheader />
            <Ahero title={"Manage Services"} page={"services"} />

            <section className='service sectionSpace'>
                <div className="container mt-5">
                    <div className="row">

                        {
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Icon</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        services && services.map((item, index) => {
                                            return (

                                                <tr key={index} className='text-center'>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <i className={item.icon}></i>
                                                    </td>

                                                    {/* action button */}
                                                    <td >
                                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => fetchApi(item.id)} data-bs-target={`#galleryview${item.id}`}>
                                                            view
                                                        </button>
                                                        <button className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                                                        <button onClick={() => deleteData(item.id)} className='text-uppercase fs-6 btn btn-danger '>delete</button>

                                                        {/* modal */}
                                                        <div className="modal fade" id={`galleryview${item.id}`} tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog  modal-lg">
                                                                0                              <div className="modal-content">
                                                                    <div className="modal-body">
                                                                        <div className="row g-4 justify-content-center">
                                                                            <div className="col-md-12">
                                                                                <div className="blog-item">
                                                                                    <div className="blog-img">
                                                                                        <div className="blog-img-inner">
                                                                                            <i className={item.icon}></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="blog-content text-start border border-top-0 rounded-bottom p-4">

                                                                                        <a href="#" className="h4 text-capitalize mb-4 d-inline-block ">{item.title}</a>
                                                                                        <p>{item.des}</p>
                                                                                        <br />
                                                                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">View all place <FaArrowRight /></a>
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

                        <div className='top-button text-end mt-4'>
                            <NavLink to="/AddServices" className="btn py-3 px-4 btn-primary">Add Services</NavLink>
                        </div>


                    </div>
                </div>
            </section>

            <AFooter />

        </div>
    )
}

export default AServices
