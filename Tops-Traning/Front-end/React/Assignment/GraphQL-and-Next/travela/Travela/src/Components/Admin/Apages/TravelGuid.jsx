import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
import { FaArrowRight } from "react-icons/fa6";
import AFooter from '../Acommon/AFooter'
import UseCustomDelete from '../../../UseCustomDelete'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function TravelGuid() {


    // const [travel, setTravel] = useState([])

    // useEffect(() => {
    //     getData()
    // }, [])



    // const getData = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:3000/TravelGuid')
    //         setTravel(res.data)
    //     } catch (err) {
    //         console.log("API Not Found", err)
    //     }
    // }


    useEffect(() => {
        fetchApi()
    },[])

    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/TravelGuid')

    const { deleteData } = UseCustomDelete('http://localhost:3000/TravelGuid')
    fetchApi()

    // Post Method start
    // when user click on edit button, set the data to editData state and open the modal
    // Why we need to use two state variables for editModal and editData?
    // We need to use two state variables for editModal and editData because we want to keep track of the data that is being edited and also whether the modal is open or closed. 
    // The editData state variable will hold the data that is being edited, while the editModal state variable will hold the id of the item that is being edited. 
    // This way, we can easily open and close the modal for a specific item and also keep track of the data that is being edited.

    const [editModal, SetEditModal] = useState(null)
    const [editData, SetEditData] = useState({
        id: '',
        image: '',
        name: '',
        designation: '',
    })

    // when user click on edit button, set the data to editData state and open the modal
    // why we need to use two state variables for editModal and editData?
    // We need to use two state variables for editModal and editData because we want to keep track of the data that is being edited and also whether the modal is open or closed. 
    // The editData state variable will hold the data that is being edited, while the editModal state variable will hold the id of the item that is being edited. 
    // This way, we can easily open and close the modal for a specific item and also keep track of the data that is being edited.
    const dataHandle = (data) => {
        SetEditData(data)
        SetEditModal(data)
        console.log(data)
    }

    // When user changes the input fields, update the editData state
    // why we need to use two state variables for editModal and editData?
    // We need to use two state variables for editModal and editData because we want to keep track of the data that is being edited and also whether the modal is open or closed. 
    // The editData state variable will hold the data that is being edited, while the editModal state variable will hold the id of the item that is being edited.
    const changeData = (e) => {
        SetEditData({
            ...editData,
            [e.target.name]: e.target.value
        })
    }

    // When user submits the form, send a PUT request to update the data
    // why we need to use two state variables for editModal and editData?
    // We need to use two state variables for editModal and editData because we want to keep track of the data that is being edited and also whether the modal is open or closed. 
    // The editData state variable will hold the data that is being edited, while the editModal state variable will hold the id of the item that is being edited.
    const submitData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/TravelGuid/${editData.id}`, editData)
            toast.success('Data Updated Successfully')
            const modal = bootstrap.Modal.getInstance(document.getElementById("guideModal"));
            modal.hide();
            SetEditModal(null)
            fetchApi()
        } catch (err) {
            toast.error('API not Found')
        }
    }




    return (
        <div>
            <Aheader />
            <Ahero title={"Admin Travel Guid"} page={'Travel Guid'} />

            <section className='travelGuid sectionSpace'>
                <div className="container mt-5">

                    <div className="mx-auto text-center w-75 mb-5">
                        <h5 className="section-title px-3">Travel Guide</h5>
                        <h1 className="mb-4">Meet Our Guide</h1>
                    </div>


                    <div className="row">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">Id</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    api && api.map((item, index) => {
                                        return (
                                            <tr key={item.id} className='text-center'>
                                                <th scope="row">{item.id}</th>
                                                <td>
                                                    <img src={item.image} alt="image" />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.designation}</td>

                                                {/* action button */}
                                                <td >
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#travelGuid${item.id}`}>
                                                        view
                                                    </button>
                                                    <button onClick={() => dataHandle(item)} data-bs-toggle="modal" data-bs-target="#guideModal" className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                                                    <button onClick={() => deleteData(item.id)} className='text-uppercase fs-6 btn btn-danger '>delete</button>

                                                    {/* modal */}
                                                    <div className="modal fade" id={`travelGuid${item.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                                                                    <a href="#" className="h4 text-capitalize mb-4 d-inline-block ">{item.name}</a>
                                                                                    <p>{item.designation}</p>
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


                        <div className='top-button text-end mt-4'>
                            <NavLink to="/AddTravelGuides" className="btn py-3 px-4 btn-primary">Add Travel Guide</NavLink>
                        </div>
                    </div>
                    {
                        editModal && (

                            <div className="modal fade" id="guideModal" tabIndex={-1} aria-labelledby="guideModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h5 className="modal-title" id="guideModalLabel"> Update Tour </h5>

                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        <form onSubmit={submitData}>
                                            <div className="modal-body">

                                                <div className="mb-3">
                                                    <label className="form-label">Name</label>

                                                    <input type="text" name="name" value={editData.name} onChange={changeData} className="form-control" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Image URL</label>

                                                    <input type="url" name="image" value={editData.image} onChange={changeData} className="form-control" />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">designation</label>

                                                    <input type="text" name="designation" value={editData.designation} onChange={changeData} className="form-control" />
                                                </div>

                                                <div className="text-center">
                                                    <img src={editData.image} alt="image" className="img-fluid rounded" style={{ maxHeight: "250px" }}
                                                    />
                                                </div>

                                            </div>

                                            <div className="modal-footer">

                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Update</button>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>

                            // <div className="container-fluid booking py-5">
                            //     <div className="container py-5">
                            //         <div className="row g-5 align-items-center">

                            //             <div className="col-lg-8 mx-auto text-center">
                            //                 {/* <h1 className="text-white mb-3">Book A Tour Deals</h1>
                            //                 <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p> */}
                            //                 <form>
                            //                     <div className="row g-3">
                            //                         <div className="col-md-12">
                            //                             <div className="form-floating">
                            //                                 <input type="text" name='name' value={editData.name} onChange={changeData} className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                            //                                 <label htmlFor="name">Your Name</label>
                            //                             </div>
                            //                         </div>
                            //                         <div className="col-md-12">
                            //                             <div className="form-floating">
                            //                                 <input
                            //                                     type="url"
                            //                                     name='image'
                            //                                     value={editData.image}
                            //                                     onChange={changeData}
                            //                                     className="form-control bg-white border-0"
                            //                                     id="img"
                            //                                     placeholder="Your img"
                            //                                 />
                            //                                 <label htmlFor="img">Your image</label>
                            //                             </div>
                            //                         </div>
                            //                         <div className="col-md-12">
                            //                             <div className="form-floating">
                            //                                 <input type="text" name='designation' value={editData.designation} onChange={changeData} className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                            //                                 <label htmlFor="designation">Your designation</label>
                            //                             </div>
                            //                         </div>
                            //                         <div className="col-6">
                            //                             <button className="btn btn-primary text-white w-100 py-3" onClick={submitData} type="submit">Update</button>
                            //                         </div>
                            //                         <div className="col-6">
                            //                             <button className="btn btn-primary text-white w-100 py-3" onClick={() => SetEditModal(null)} type="submit">Cancel</button>
                            //                         </div>
                            //                     </div>
                            //                 </form>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        )
                    }
                </div>
            </section>

            <AFooter />
        </div>
    )
}

export default TravelGuid
