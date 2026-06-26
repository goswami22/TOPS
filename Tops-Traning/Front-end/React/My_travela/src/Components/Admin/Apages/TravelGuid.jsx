import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'

function TravelGuid() {


    const [travel, setTravel] = useState([])

    useEffect(() => {
        getData()
    }, [])



    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/TravelGuid')
            setTravel(res.data)
        } catch (err) {
            console.log("API Not Found", err)
        }
    }



    return (
        <div>
            <Aheader />
            <Ahero title={"Travel Guid"} page={'Travel Guid'} />


            <div className="container">
                <h1>Travel Guid</h1>
                <div className="row">
                    {
                        travel && travel.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <span>{item.designation}</span><br />
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

export default TravelGuid
