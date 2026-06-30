import React, { useEffect } from 'react'
import Aheader from '../Acommon/Aheader'
import AFooter from '../Acommon/AFooter'
import Ahero from '../Acommon/Ahero'
import UseCustomHooks from '../../../UseCustomHooks'
import UseCustomDelete from '../../../UseCustomDelete'

function APackages() {


    useEffect(() => {
        fetchApi()
    }, [])


    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/packages')

    const {deleteData} = UseCustomDelete('http://localhost:3000/packages')
    fetchApi()



    return (
        <div>
            <Aheader />
            <Ahero title={'Admin Travel Packages'} page={'Packages'} />

            <section className="packages sectionSpace">
                <div className=" container text-center mb-5">
                    <h5 className="section-title px-3">Packages</h5>
                    <h1 className="mb-5">Awesome Packages</h1>

                    <div className="row">

                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Person</th>
                                    <th scope="col">Days</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Hotel</th>
                                    {/* <th scope="col">Description</th> */}
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    api && api.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td scope="col">{item.id}</td>
                                                <td scope="col">
                                                    <img src={item.image} alt="image" />
                                                </td>
                                                <td scope="col">{item.place}</td>
                                                <td scope="col">{item.person}</td>
                                                <td scope="col">{item.day}</td>
                                                <td scope="col">{item.price}</td>
                                                <td scope="col">{item.title}</td>
                                                <td scope="col">{item.hotel}</td>
                                                {/* <td scope="col">{item.dis}</td> */}
                                                <td scope="col">
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#blogview${item.id}`}>
                                                        view
                                                    </button>
                                                    <button className="btn btn-success mx-2">Edit</button>
                                                    <button onClick={()=> deleteData(item.id)} className="btn btn-danger">Delete</button>

                                                    {/* Modal */}

                                                    <div>
                                                        <div className="modal fade" id={`blogview${item.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                                                        <div className=" blog-info d-flex align-items-center border border-start-0 border-end-0">
                                                                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{item.place}</small>
                                                                                            <a href="#" className="btn  flex-fill text-center text-dark border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />{item.day}</a>
                                                                                            <a href="#" className="btn flex-fill text-center text-dark py-2"><i className="fa fa-comments text-primary me-2" />{item.person}</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="blog-content  text-start border border-top-0 rounded-bottom p-4">
                                                                                        <p className="mb-3">{item.title}</p>
                                                                                        <a className="h4">{item.hotel}</a>
                                                                                        <p className="my-3">{item.dis}</p>

                                                                                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                                                                    </div>
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

                    </div>

                </div>

            </section>

            <AFooter />
        </div>
    )
}

export default APackages
