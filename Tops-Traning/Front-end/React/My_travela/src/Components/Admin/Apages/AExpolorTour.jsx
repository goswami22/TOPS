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
  const {deleteData} = UseCustomDelete('http://localhost:3000/tour')
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
                            <button onClick={() => handleEdit(item)} className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                            <button onClick={()=> deleteData(item.id)} className='text-uppercase fs-6 btn btn-danger '>delete</button>

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
                <div className="container-fluid booking py-5">
                  <div className="container py-5">
                    <div className="row g-5 align-items-center">

                      <div className="col-lg-8 mx-auto text-center">
                        <h1 className="text-white mb-3">Book A Tour Deals</h1>
                        <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>
                        <form>
                          <div className="row g-3">
                            <div className="col-md-12">
                              <div className="form-floating">
                                <input type="text" name='title' value={editData.title}  onChange={getData} className="form-control bg-white border-0" id="name" placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-floating">
                                <input
                                  type="url"
                                  name='image'
                                  value={editData.image}
                                  onChange={getData}
                                  className="form-control bg-white border-0"
                                  id="img"
                                  placeholder="Your img"
                                />
                                <label htmlFor="img">Your image</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-floating">
                                <select name='category' value={editData.category}  onChange={getData} className="form-select bg-white border-0" id="select1">
                                  <option value='national'>national</option>
                                  <option value='international'>international</option>
                                </select>
                                <label htmlFor="select1">Destination</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <button className="btn btn-primary text-white w-100 py-3" onClick={handleUpdate} type="submit">Update</button>
                            </div>
                            <div className="col-6">
                              <button className="btn btn-primary text-white w-100 py-3" onClick={()=> setEditModal(null)} type="submit">Cancel</button>
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
        </div>
      </section>

      <AFooter />

    </div>
  )
}

export default AExpolorTour                  