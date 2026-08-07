import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
// import { FaArrowRight } from "react-icons/fa6"
import AFooter from '../Acommon/AFooter'
import UseCoustomCategory from '../../../UseCoustomCategory'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import UseCustomDelete from '../../../UseCustomDelete'


function AExpolorTour() {


  const [tour, setTour] = useState([])


  useEffect(() => {
    fetchApi()
  }, [])


  // const getdata = async (category) => {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/tour?${category}`)
  //     setTour(res.data)
  //   } catch (err) {
  //     console.log("API not Found", err)
  //   }
  // }

  // const {dataCategory, fetchdata} = UseCoustomCategory(`http://localhost:3000/tour`)

  // useEffect(() => {
  //   fetchApi()
  // }, [])




  // get data from api
  const { api, fetchApi } = UseCustomHooks('http://localhost:3000/tour')


  // delete method
  const { deleteData } = UseCustomDelete('http://localhost:3000/tour')
  fetchApi()



  // Put method
  const [editModal, setEditModal] = useState(null)
  const [editData, SetEditData] = useState({
    id: "",
    title: "",
    image: "",
    category: ""
  })

  const handleEdit = (data) => {
    console.log(data)
    setEditModal(data)
    SetEditData(data)
  }

  const getData = (e) => {
    SetEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdate = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.put(`http://localhost:3000/tour/${editData.id}`, editData)
      toast.success('Data Updated Successfully')
      const modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
      modal.hide();
      setEditModal(null)
      fetchApi()



    } catch (error) {
      toast.error('Api Not Found')
    }
  }



  return (
    <div>
      <Aheader />
      <Ahero title={"Admin Expolor Tour"} page={'Tour'} />


      <section className='ExploreTour sectionSpace'>
        <div className="container-fluid my-5">
          <div className="container">

            <div className="mx-auto text-center w-75 mb-5">
              <h5 className="section-title px-3">Explore Tour</h5>
              <h1 className="mb-4">The World</h1>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
              </p>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">
            {

              <table className="table table-hover table-bordered">
                <thead>
                  <tr className='text-center'>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
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
                            <button onClick={() => handleEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal" className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
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

            <div className='bottom-button text-end mt-4'>
              <NavLink to="/AddTour" className="btn py-3 px-5   btn-primary">Add Tour</NavLink>
            </div>
          </div>
          <div className="row">

            {
              editModal && (

                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Update Tour</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>

                      <form onSubmit={handleUpdate}>
                        <div className="modal-body">

                          <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" name="title" value={editData.title} onChange={getData} className="form-control" />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="url" name="image" value={editData.image} onChange={getData} className="form-control" />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Category</label>

                            <select name="category" value={editData.category} onChange={getData} className="form-select">
                              <option value="national">National</option>
                              <option value="international">International</option>
                            </select>
                          </div>

                          <div className="text-center">
                            <img src={editData.image} alt="" className="img-fluid rounded" style={{ maxHeight: "250px" }} />
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
                          <button type="submit" className="btn btn-primary">Update</button>

                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              )


            }
          </div>
        </div>
      </section>

      <AFooter />

    </div>
  )
}

export default AExpolorTour                  