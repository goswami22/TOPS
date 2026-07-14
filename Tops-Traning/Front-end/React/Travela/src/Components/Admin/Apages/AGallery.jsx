import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
import { FaArrowRight } from "react-icons/fa6";
import AFooter from '../Acommon/AFooter'
import UseCustomDelete from '../../../UseCustomDelete'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'


function AGallery() {

  // const [gallery, setGallery] = useState([])

  // useEffect(() => {
  //   getData()
  // })

  // const getData = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:3000/gallery')
  //     setGallery(res.data)
  //   } catch {
  //     console.log('API Not found', err)
  //   }
  // }


  useEffect(() => {
    fetchApi()
  }, [])

  // get APi 
  const { api, fetchApi } = UseCustomHooks('http://localhost:3000/gallery')


  // Delete data 
  const { deleteData } = UseCustomDelete('http://localhost:3000/gallery')
  fetchApi()


  // Update dat 
  const [editModal, SetEditModal] = useState(null)
  const [editData, SetEditData] = useState({
    id: '',
    name: '',
    image: '',
    category: ''
  })


  const handleData = (data) => {
    SetEditData(data)
    SetEditModal(data)
    console.log(data)
  }


  const changeData = (e) => {
    SetEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  const updateData = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.put(`http://localhost:3000/gallery/${editData.id}`, editData)
      toast.success("Data Updated Successfull")
      const modal = bootstrap.Modal.getInstance(document.getElementById("updateModal"));
      modal.hide();
      SetEditModal(null)
      fetchApi()
    } catch (error) {
      toast.error("API not Found")
    }

  }


  return (
    <div>
      <Aheader />
      <Ahero title={'Admin Gallery'} page={'Gallery'} />

      <section className='sectionSpace'>
        <div className="container my-5">
          <div className="row">

            <div className="mx-auto text-center w-75 mb-5">
              <h5 className="section-title px-3">our Gallery</h5>
              <h1 className="mb-4">Tourism & Traveling Gallery.</h1>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
              </p>
            </div>

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

                        <tr key={item.id} className='text-center'>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>
                            <img src={item.image} alt="image" />
                          </td>
                          <td>{item.category}</td>

                          {/* action button */}
                          <td >
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => fetchApi(item.id)} data-bs-target={`#galleryview${item.id}`}>
                              view
                            </button>
                            <button onClick={() => handleData(item)} data-bs-toggle="modal" data-bs-target="#updateModal" className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                            <button onClick={() => deleteData(item.id)} className='text-uppercase fs-6 btn btn-danger '>delete</button>

                            {/* view modal */}
                            <div className="modal fade" id={`galleryview${item.id}`} tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog  modal-lg">
                                0                              <div className="modal-content">
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
              <NavLink to="/AddGallery" className="btn py-3 px-4 btn-primary">Add Gallery</NavLink>
            </div>
          </div>

        </div>
        {
          editModal && (
          // Edit mOdal
          <div className="modal fade" id="updateModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title" id="editModalLabel">Update Gallary</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <form onSubmit={updateData}>
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
                      <label className="form-label">Category</label>

                      <select name="category" value={editData.category} onChange={changeData} className="form-select">
                        <option value='WorldTour'>WorldTour</option>
                        <option value='OceanTour'>OceanTour</option>
                        <option value='SummerTour'>SummerTour</option>
                        <option value='SportTour'>SportTour</option>
                      </select>
                    </div>

                    <div className="text-center">
                      <img src={editData.image} alt="" className="img-fluid rounded" style={{ maxHeight: "250px" }} />
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Update Gllary</button>

                  </div>
                </form>

              </div>
            </div>
          </div>


          // <div className="container-fluid booking py-5">
          //   <div className="container py-5">
          //     <div className="row g-5 align-items-center">
          //       <div className="col-lg-10 mx-auto text-center">
          //         <h1 className="text-white mb-3">Our Gallery</h1>
          //         <p className="text-white mb-5">Get <span className="text-warning">50% Off</span> On Your First Adventure Trip With Travela. Get More Deal Offers Here.</p>

          //         <form onSubmit={updateData}>
          //           <div className="row g-3">
          //             <div className="col-md-12">
          //               <div className="form-floating">
          //                 <input type="text" name='name' value={editData.name} onChange={changeData} className="form-control bg-white border-0" id="name" placeholder="Your Tour Name" />
          //                 <label htmlFor="name">Your Tour Name</label>
          //               </div>
          //             </div>
          //             <div className="col-md-12">
          //               <div className="form-floating">
          //                 <input type="url" name='image' value={editData.image} onChange={changeData} className="form-control bg-white border-0" id="image" placeholder="Add Image Link" />
          //                 <label htmlFor="image">Add Image Link</label>
          //               </div>
          //             </div>
          //             <div className="col-md-12">
          //               <div className="form-floating">
          //                 <select name='category' value={editData.category} onChange={changeData} className="form-select bg-white border-0" id="select1">
          //                   <option hidden> Select Here </option>
          //                   <option value='WorldTour'>WorldTour</option>
          //                   <option value='OceanTour'>OceanTour</option>
          //                   <option value='SummerTour'>SummerTour</option>
          //                   <option value='SportTour'>SportTour</option>
          //                 </select>
          //                 <label htmlFor="select1">Category</label>
          //               </div>
          //             </div>

          //             <div className="col-6">
          //               <button onClick={updateData} className="btn btn-primary text-white w-100 py-3" type="submit">Update</button>
          //             </div>
          //             <div className="col-6">
          //               <button onClick={() => SetEditModal(null)} className="btn btn-primary text-white w-100 py-3" type="submit">cancel</button>
          //             </div>
          //           </div>
          //         </form>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          )
        }
      </section>

      <AFooter />

    </div>
  )
}

export default AGallery
