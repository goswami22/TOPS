import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'

function AGallery() {

  const [gallery, setGallery] = useState([])

  useEffect(() => {
    getData()
  })

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/gallery')
      setGallery(res.data)
    } catch {
      console.log('API Not found', err)
    }
  }




  return (
    <div>
      <Aheader />
      <Ahero title={'gallery'} page={'Our gallery'} />
      <h1>our Gallery</h1>

      <div className="container">
        <div className="row">
          {
            gallery && gallery.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5><a href="#" className="btn btn-primary">Go somewhere</a>
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

export default AGallery
