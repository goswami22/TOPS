import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
import { FaArrowRight } from "react-icons/fa6"
import AFooter from '../Acommon/AFooter'
import UseCustomDelete from '../../../UseCustomDelete'

function AdminDestination() {


    // const [destination, setDestination] = useState([])

    // useEffect(() => {
    //     getData()
    // })

    // const getData = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:3000/destination')
    //         setDestination(res.data)
    //     } catch (error) {
    //         console.log('API Not found', error)
    //     }
    // }

    useEffect(() => {
        fetchApi()
    }, [])

    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/destination')

    const {deleteData} = UseCustomDelete('http://localhost:3000/destination')
    fetchApi()

    return (
        <div>
            <Aheader />
            <Ahero title={'Admin Destination'} page={'Destination'} />


            <section className='destination sectionSpace'>
                <div className="container">
                    <div className="row">
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

                    </div>
                </div>
            </section>

            <AFooter />


        </div>
    )
}

export default AdminDestination
