import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Ahero from '../Acommon/Ahero'
import axios from 'axios'
import UseCustomHooks from '../../../UseCustomHooks'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'

function AdminBlog() {


    // const [blog, setBlog] = useState([])


    // useEffect(() => {
    //     getBlog()
    // }, [])

    // const getBlog = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:3000/blogs')
    //         setBlog(res.data)
    //     }
    //     catch (err) {
    //         console.log("API not found", err)
    //     }
    // }

    useEffect(() => {
        fetchApi()
    }, [])

    const { api, fetchApi } = UseCustomHooks('http://localhost:3000/blogs')


    const [blogData, setBlogData] = useState({
        id: "",
        image: "",
        date: "",
        post: "",
        title: "",
        dis: ""
    })

    const singleView = async (id) => {

        try {
            const res = await axios.get(`http://localhost:3000/blogs/${id}`)
            setBlogData(res.data)
        } catch (error) {
            console.log("Api Not Found", error)
        }
    }

    

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/blogs/${id}`)
            toast.success("Data Delete Successfully!");
            fetchApi()
        } catch (error) {
            toast.error('Api not Found', error)
        }
    }






    
    return (
        <div>
            <Aheader />
            <Ahero title={'Admin Blog'} page={'Blog'} />

            <section className='sectionSpace'>
                <div className="container my-5">

                    <div className="mx-auto text-center w-75 mb-5">
                        <h5 className="section-title px-3">Our blog</h5>
                        <h1 className="mb-4">Popular Travel Blogs</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                        </p>
                    </div>


                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr className='text-center'>
                                <th className='text-capitalize' scope="col">id</th>
                                <th className='text-capitalize' scope="col">title</th>
                                <th className='text-capitalize' scope="col">post</th>
                                <th className='text-capitalize' scope="col">date</th>
                                <th className='text-capitalize' scope="col">image</th>
                                <th className='text-capitalize' scope="col">dis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                api && api.map((item, index) => {
                                    return (
                                        <tr key={index} className='text-center'>
                                            <th scope="row">{item.id}</th>
                                            <td >{item.title}</td>
                                            <td >{item.post}</td>
                                            <td >{item.date}</td>
                                            <td ><img src={item.image} style={{ width: '100px' }} alt={item.title} /></td>
                                            {/* <td>{item.dis}</td> */}
                                            <td>
                                                <button type="button" onClick={() => singleView(item.id)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#blogview${item.id}`}>
                                                    view
                                                </button>
                                                <button className="btn btn-success mx-2">Edit</button>
                                                <button onClick={() => deleteData(item.id)} className="btn btn-danger">Delete</button>

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
                                                                                        <a href="#" className="btn  flex-fill text-center text-dark border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                                                                        <a href="#" className="btn flex-fill text-center text-dark py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="blog-content  text-start border border-top-0 rounded-bottom p-4">
                                                                                    <p className="mb-3">Posted By: {item.post} </p>
                                                                                    <a className="h4">{item.name}</a>
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

                    <div className='bottom-button text-end mt-4'>
                        <NavLink to="/AddBlog" className="btn py-3 px-5   btn-primary">Add Blog</NavLink>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default AdminBlog
