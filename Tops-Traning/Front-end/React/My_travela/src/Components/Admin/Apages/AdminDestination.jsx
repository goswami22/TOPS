import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
import { FaArrowRight } from "react-icons/fa6"
import AFooter from '../Acommon/AFooter'
import UseCustomDelete from '../../../UseCustomDelete'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminDestination() {


    // const [destination, setDestination] = useState([])

    // useEffect(() => {
    //     getData()
    // })

    // const getData = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:3000/destination')
    //         setDestination(res.data)
    //     } catch (error) {
    //         console.log('API Not found', error)
    //     }
    // }

    useEffect(() => {
        fetchApi()
    }, [])

    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/destination')

    const { deleteData } = UseCustomDelete('http://localhost:3000/destination')
    fetchApi()

    const [editModal, SetModal] = useState(null)
    const [editData, SetEditData] = useState({
        id: '',
        image: '',
        title: '',
        category: ''
    })

    const handlingData = (data) => {
        SetModal(data)
        SetEditData(data)
        console.log(data)
    }

    const changeData = (e) => {
        SetEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/destination/${editData.id}`, editData)
            toast.success('Data added Successfully')
            SetModal(null)
            fetchApi()
        } catch (error) {
            toast.error("API Not Found")
        }
    }

    return (
        <div>
            <Aheader />
            <Ahero title={'Admin Destination'} page={'Destination'} />


            <section className='destination sectionSpace'>
                <div className="container">
                    <div className="mx-auto text-center mb-5">
                        <h5 className="section-title px-3">Destination</h5>
                        <h1 className="mb-4">Popular Destination</h1>
                    </div>
                    <div className="row">
                        {
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col">Id</th>
                                        <th scope="col">Tile</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        api && api.map((item, index) => {
                                            return (
                                                <tr key={index} className='text-center'>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.title}</td>
                                                    <td>
                                                        <img src={item.image} alt="image" />
                                                    </td>
                                                    <td>{item.category}</td>

                                                    {/* action button */}
                                                    <td >
                                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#destinationview${item.id}`}>
                                                            view
                                                        </button>
                                                        <button onClick={() => handlingData(item)} className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                                                        <button onClick={() => deleteData(item.id)} className='text-uppercase fs-6 btn btn-danger '>delete</button>

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

                        <div className='bottom-button text-end mt-4'>
                            <NavLink to="/AddDestination" className="btn py-3 px-5   btn-primary">Add Destination</NavLink>
                        </div>
                    </div>


                    {
                        editModal && (
                            <div className="container-fluid booking mt-5 py-5">
                                <div className="container py-5">
                                    <div className="row g-5 align-items-center">
                                        <div className="col-lg-10 mx-auto text-center">
                                            <h1 className="text-white mb-3">Our Gallery</h1>
                                            <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>

                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <input type="text" name='title' value={editData.title} onChange={changeData} className="form-control bg-white border-0" id="name" placeholder="Your Tour Name" />
                                                            <label htmlFor="name">Your Tour Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <input type="url" name='image' value={editData.image} onChange={changeData} className="form-control bg-white border-0" id="image" placeholder="Add Image Link" />
                                                            <label htmlFor="image">Add Image Link</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-floating">
                                                            <select name='category' value={editData.category} onChange={changeData} className="form-select bg-white border-0" id="select1">
                                                                <option hidden> Select Here </option>
                                                                <option value='USA'>USA</option>
                                                                <option value='Canada'>Canada</option>
                                                                <option value='Europe'>Europe</option>
                                                                <option value='China'>China</option>
                                                                <option value='Singapore'>Singapore</option>
                                                            </select>
                                                            <label htmlFor="select1">Category</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <button onClick={submitData} className="btn btn-primary text-white w-100 py-3" type="submit">Update</button>
                                                    </div>
                                                    <div className="col-6">
                                                        <button onClick={() => SetModal(null)} className="btn btn-primary text-white w-100 py-3" type="button">Cancel</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>

            <AFooter />


        </div>
    )
}

export default AdminDestination
