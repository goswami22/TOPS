import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
// import { FaArrowRight } from "react-icons/fa6"
import AFooter from '../Acommon/AFooter'
import UseCoustomCategory from '../../../UseCoustomCategory'

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

  const { api, fetchApi } = UseCustomHooks('http://localhost:3000/tour')


  return (
    <div>
      <Aheader />
      <Ahero title={"Admin Expolor Tour"} page={'Tour'} />


      <section className='ExploreTour sectionSpace'>
        <div className="container-fluid">
          <div className="container">
            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
              <h5 className="section-title px-3">Explore Tour</h5>
              <h1 className="mb-4">The World</h1>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
              </p>
            </div>
            {/* <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                <li className="nav-item">
                  <a onClick={() => fetchdata()} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#National">
                    <span className="text-dark" style={{ width: 250 }}>National Tour Category</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={() => fetchdata()} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#International">
                    <span className="text-dark" style={{ width: 250 }}>International tour Category</span>
                  </a>
                </li>
              </ul>
            </div> */}

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
                            <button className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                            <button className='text-uppercase fs-6 btn btn-danger '>delete</button>

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
        </div>
      </section>

            <AFooter/>
            
    </div>
  )
}

export default AExpolorTour                  