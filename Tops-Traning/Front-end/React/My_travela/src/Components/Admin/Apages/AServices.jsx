import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'

function AServices() {


    const [services, setServices] = useState([])

    useEffect(() => {
        getSetvices()
    })


    const getSetvices = async () => {
        try {
            const res = await axios.get('http://localhost:3000/services')
            setServices(res.data)
        } catch (err) {
            console.log('API is NOT Found', err)
        }
    }




    return (
        <div>
            <Aheader />
            <Ahero title={"Services"} page={"services"} />


            <div className="container mt-5">
                <div className="row">
                    {
                        services && services.map((item, index) => {
                            return (
                                <div className="col-6" key={index}>


                                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={item.icon} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.des}</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
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

export default AServices
