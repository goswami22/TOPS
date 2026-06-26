import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'

function AdminBlog() {


    const [blog, setBlog] = useState([])


    useEffect(() => {
        getBlog()
    }, [])

    const getBlog = async () => {
        try {
            const res = await axios.get('http://localhost:3000/blogs')
            setBlog(res.data)
        }
        catch (err) {
            console.log("API not found", err)
        }
    }


    return (
        <div>
            <Aheader />
            <Ahero title={'Admin Blog'} page={'Admin Blog'} />


            <div className="container my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">post</th>
                            <th scope="col">date</th>
                            <th scope="col">image</th>
                            <th scope="col">dis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blog && blog.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{item.post}</td>
                                        <td>{item.date}</td>
                                        <td><img src={item.image} style={{ width: '100px' }} alt={item.title} /></td>
                                        {/* <td>{item.dis}</td> */}
                                        <td>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#blogview${item.id}`}>
                                                    view
                                                </button>
                                            <button className="btn btn-success mx-2">Edit</button>
                                            <button className="btn btn-danger">Delete</button>

                                            {/* Modal */}

                                            {/* Button trigger modal */}
                                            <div>
                                                

                                                <div className="modal fade" id={`blogview${item.id}`} tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{item.date}</small>
                                                                                    <a href="#" className="btn  flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                                                                    <a href="#" className="btn flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="blog-content border border-top-0 rounded-bottom p-4">
                                                                                <p className="mb-3">Posted By: {item.post} </p>
                                                                                <a href="#" className="h4">{item.name}</a>
                                                                                <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                                                                <p className="my-3">{item.desc}</p>
                                                                                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div> */}
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
    )
}

export default AdminBlog
