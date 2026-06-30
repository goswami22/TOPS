import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomH from '../../../UseCustomH'
import UseCustomHooks from '../../../UseCustomHooks'
import { FaArrowRight } from "react-icons/fa6";
import AFooter from '../Acommon/AFooter'
import UseCustomDelete from '../../../UseCustomDelete'
import { toast } from 'react-toastify';


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
    const {deleteData} = UseCustomDelete('http://localhost:3000/gallery')
    fetchApi()


  return (
    <div>
      <Aheader />
      <Ahero title={'Admin Gallery'} page={'Gallery'} />

      <section className='sectionSpace'>
        <div className="container my-5">
          <div className="row">

            {/* <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
                <li className="nav-item">
                  <a  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#GalleryTab-1">
                    <span className="text-dark" style={{ width: 150 }}>All</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={()=> fetchApi('category="WeekendTour"')} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-2">
                    <span className="text-dark" style={{ width: 150 }}>World tour</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={()=> fetchApi('category=""')} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-3">
                    <span className="text-dark" style={{ width: 150 }}>Ocean Tour</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-4">
                    <span className="text-dark" style={{ width: 150 }}>Summer Tour</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#GalleryTab-5">
                    <span className="text-dark" style={{ width: 150 }}>Sport Tour</span>
                  </a>
                </li>
              </ul>

            </div> */}



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
                            <button className='text-uppercase fs-6 btn btn-success mx-2'>edit</button>
                            <button onClick={()=> deleteData(item.id)} className='text-uppercase fs-6 btn btn-danger '>delete</button>

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

            {/* {
            gallery && gallery.map((item, index) => {
              return (
                // <div className="col-3" key={index}>
                //   <div className="card" style={{ width: '18rem' }}>
                //     <img src={item.image} className="card-img-top" alt="..." />
                //     <div className="card-body">
                //       <h5 className="card-title">{item.name}</h5><a href="#" className="btn btn-primary">Go somewhere</a>
                //     </div>
                //   </div>

                // </div>

              )
            })
          } */}
          </div>
        </div>
      </section>

      <AFooter/>

    </div>
  )
}

export default AGallery
