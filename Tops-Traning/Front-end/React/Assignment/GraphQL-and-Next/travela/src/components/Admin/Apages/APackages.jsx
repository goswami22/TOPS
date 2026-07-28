import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import AFooter from '../Acommon/AFooter'
import Ahero from '../Acommon/Ahero'
import UseCustomHooks from '../../../UseCustomHooks'
import UseCustomDelete from '../../../UseCustomDelete'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function APackages() {


    useEffect(() => {
        fetchApi()
    }, [])


    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/packages')

    const { deleteData } = UseCustomDelete('http://localhost:3000/packages')
    fetchApi()


    const [editModal, SetEditModal] = useState(null)

    const [packagedata, setPackageData] = useState({
        id: '',
        image: '',
        place: '',
        person: '',
        day: '',
        price: '',
        title: '',
        hotel: '',
        dis: ''
    })

    const handleData = (data) => {
        SetEditModal(data)
        setPackageData(data)
        console.log(data)
    }

    const getData = (e) => {
        setPackageData({
            ...packagedata,
            [e.target.name]: e.target.value
        })
    }

    const submitPackage = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/packages/${packagedata.id}`, packagedata)
            toast.success('Data Update successfully')
            const modal = bootstrap.Modal.getInstance(document.getElementById("packageModal"));
            modal.hide();
            SetEditModal(null)
            fetchApi()


        } catch (error) {
            toast.error('API not Found')
        }
    }




    return (
        <div>
            <Aheader />
            <Ahero title={'Admin Travel Packages'} page={'Packages'} />

            <section className="packages sectionSpace">
                <div className=" container text-center my-5">

                    <div className="mx-auto text-center w-75 mb-5">
                        <h5 className="section-title px-3">Packages</h5>
                        <h1 className="mb-4">Awesome Packages</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                        </p>
                    </div>

                    <div className="row">

                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Person</th>
                                    <th scope="col">Days</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Hotel</th>
                                    {/* <th scope="col">Description</th> */}
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    api && api.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td scope="col">{item.id}</td>
                                                <td scope="col">
                                                    <img src={item.image} alt="image" />
                                                </td>
                                                <td scope="col">{item.place}</td>
                                                <td scope="col">{item.person}</td>
                                                <td scope="col">{item.day}</td>
                                                <td scope="col">{item.price}</td>
                                                <td scope="col">{item.title}</td>
                                                <td scope="col">{item.hotel}</td>
                                                {/* <td scope="col">{item.dis}</td> */}
                                                <td scope="col">
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#blogview${item.id}`}>
                                                        view
                                                    </button>
                                                    <button data-bs-toggle="modal" data-bs-target="#packageModal" onClick={() => handleData(item)} className="btn btn-success mx-2">Edit</button>
                                                    <button onClick={() => deleteData(item.id)} className="btn btn-danger">Delete</button>

                                                    {/* wiew Modal */}

                                                    <div>
                                                        <div className="modal fade" id={`blogview${item.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                                                        <div className=" blog-info d-flex align-items-center border border-start-0 border-end-0">
                                                                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{item.place}</small>
                                                                                            <a href="#" className="btn  flex-fill text-center text-dark border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />{item.day}</a>
                                                                                            <a href="#" className="btn flex-fill text-center text-dark py-2"><i className="fa fa-comments text-primary me-2" />{item.person}</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="blog-content  text-start border border-top-0 rounded-bottom p-4">
                                                                                        <p className="mb-3">{item.title}</p>
                                                                                        <a className="h4">{item.hotel}</a>
                                                                                        <p className="my-3">{item.dis}</p>

                                                                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                                                                    </div>
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

                    </div>
                    <div className='top-button text-end mt-4'>
                        <NavLink to="/AddPackages" className="btn py-3 px-4 btn-primary">Add Package</NavLink>
                    </div>
                </div>
                {
                    editModal && (
                        // Edit mOdal
                        <div className="modal fade" id="packageModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h5 className="modal-title" id="editModalLabel">Update Packages</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <form onSubmit={submitPackage}>
                                        <div className="modal-body">

                                            <div className="row">

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">Package Title</label>
                                                    <input type="text" name="title" value={packagedata.title} onChange={getData} className="form-control" placeholder="Enter package title"/>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">Image URL</label>
                                                    <input type="url" name="image" value={packagedata.image} onChange={getData} className="form-control" placeholder="https://example.com/image.jpg"/>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">Destination</label>
                                                    <input type="text" name="place" value={packagedata.place} onChange={getData} className="form-control" placeholder="Goa"/>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">Hotel Name</label>
                                                    <input type="text" name="hotel" value={packagedata.hotel} onChange={getData} className="form-control" placeholder="Taj Resort" />
                                                </div>

                                                <div className="col-md-4 mb-4">
                                                    <label className="form-label fw-semibold">Person</label>
                                                    <input type="number" name="person" value={packagedata.person} onChange={getData} className="form-control" placeholder="2" />
                                                </div>

                                                <div className="col-md-4 mb-4">
                                                    <label className="form-label fw-semibold">Days</label>
                                                    <input type="number" name="day" value={packagedata.day} onChange={getData} className="form-control" placeholder="5"/>
                                                </div>

                                                <div className="col-md-4 mb-4">
                                                    <label className="form-label fw-semibold">Price ($)</label>
                                                    <input type="number" name="price" value={packagedata.price} onChange={getData} className="form-control" placeholder="12000"/>
                                                </div>

                                                <div className="col-12 mb-4">
                                                    <label className="form-label fw-semibold">Description</label>

                                                    <textarea name="dis" value={packagedata.dis} onChange={getData} className="form-control" rows="5" placeholder="Write package description..." ></textarea>
                                                </div>

                                                <div className="col-12 text-center">

                                                    <label className="form-label fw-semibold d-block mb-3">Image Preview</label>

                                                    <img src={packagedata.image ||"https://placehold.co/600x350?text=Preview"} alt="Preview" className="img-fluid rounded shadow border" style={{maxHeight: "250px",objectFit: "cover"}}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-secondary px-4" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-primary px-4">Update Package</button>
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

export default APackages
