import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'

function AdminDestination() {


    const [destination, setDestination] = useState([])

    useEffect(() => {
        getData()
    })

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/destination')
            setDestination(res.data)
        } catch (error) {
            console.log('API Not found', error)
        }
    }


    return (
        <div>
            <Aheader />
            <Ahero title={'Destination'} page={'Destination'} />

            <h1>Admin Destination</h1>


            <div className="container">
                <div className="row">
                    {

                        destination && destination.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
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

export default AdminDestination
