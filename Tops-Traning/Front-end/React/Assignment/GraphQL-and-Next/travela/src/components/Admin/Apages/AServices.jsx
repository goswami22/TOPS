import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import AFooter from '../Acommon/AFooter'
import { FaArrowRight } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import UseCustomDelete from '../../../UseCustomDelete'
import { toast } from 'react-toastify'

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

    // delete
    const { deleteData } = UseCustomDelete('http://localhost:3000/services')
    getSetvices()

    // update 

    const [editmodal, setEditModal] = useState(null)

    const [editData, setEditData] = useState({
        id: '',
        title: '',
        des: '',
        icon: ''
    })

    const hadleData = (data) => {
        setEditModal(data)
        setEditData(data)
    }

    const getData = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.patch(`http://localhost:3000/services/${editData.id}`,editData)
            toast.success('Data Succesfullly updated')
            const modal = bootstrap.Modal.getInstance(document.getElementById("serviceModal"));
            modal.hide();
            setEditModal(null)
            getSetvices()


        } catch (error) {
            toast.error('Api Not Found')
        }
    }


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
                                                        <button data-bs-toggle="modal" data-bs-target="#serviceModal" onClick={()=> hadleData(item)} className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
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
                {
                    editmodal && (
                        <div className="modal fade" id="serviceModal" tabIndex={-1} aria-labelledby="guideModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h5 className="modal-title" id="guideModalLabel"> Update Tour </h5>

                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <form onSubmit={submitData}>
                                        <div className="modal-body">

                                            <div className="mb-3">
                                                <label className="form-label">Title</label>

                                                <input type="text" name="title" value={editData.title} onChange={getData} className="form-control" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Icon</label>
                                                <input type="text" name="icon" value={editData.icon} onChange={getData} className="form-control" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Description</label>

                                                <input type="text" name="des" value={editData.des} onChange={getData} className="form-control" />
                                            </div>

                                            <div className="text-center">
                                                <i className={editData.icon}></i>
                                            </div>

                                        </div>

                                        <div className="modal-footer">

                                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-success">Update</button>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    )
                }


            </section>

            <AFooter />

        </div>
    )
}

export default AServices
