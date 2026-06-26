import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'

function AExpolorTour() {


  const [tour, setTour] = useState([])


  useEffect(() => {
    getdata('category=National')
  }, [])


  const getdata = async (category) => {
    try {
      const res = await axios.get(`http://localhost:3000/tour?${category}`)
      console.log(res.data)
      setTour(res.data)
    } catch (err) {
      console.log("API not Found", err)
    }
  }


  // useEffect(() => {
  //   fetchApi()
  // }, [])

  // const { api, fetchApi } = UseCustomHooks('http://localhost:3000/ExpolorTour')


  return (
    <div>
      <Aheader />
      <Ahero title={"Expolor Tour"} page={'Tour'} />



      <div className="container-fluid ExploreTour pt-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Explore Tour</h5>
            <h1 className="mb-4">The World</h1>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
            </p>
          </div>
          <div className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a onClick={() => getdata("category=National")} className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" href="#National">
                  <span className="text-dark" style={{ width: 250 }}>National Tour Category</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => getdata("category=international")} className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" href="#International">
                  <span className="text-dark" style={{ width: 250 }}>International tour Category</span>
                </a>
              </li>
            </ul>
          </div>


          <div className="tab-content">

          </div>


        </div>
      </div>



      <div className="container">
        <div className="row">
          {
            tour && tour.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="card mb-5" style={{ width: '18rem' }}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className=''>{item.category}</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


    </div>
  )
}

export default AExpolorTour                  