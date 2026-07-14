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


    // Delete 
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/blogs/${id}`)
            toast.success("Data Delete Successfully!");
            fetchApi()
        } catch (error) {
            toast.error('Api not Found', error)
        }
    }

    // Edit 

    const [editModal, setEditModal] = useState(null)
    const [editBlog, setEditBlog] = useState({
        id: '',
        image: '',
        date: '',
        post: '',
        title: '',
        dis: ''
    })

    const handleData = (data) => {
        setEditBlog(data)
        setEditModal(data)
    }

    const getData = (e) => {
        setEditBlog({
            ...editBlog,
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) => {
        e.preventDefault()

        // const { image, date, post, title, dis} = editBlog

        try {
            const res = await axios.patch(`http://localhost:3000/blogs/${editBlog.id}`, editBlog)
            toast.success('Data Update successfully')
            const modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
            modal.hide();
            setEditModal(null)
            fetchApi()

        } catch (error) {
            toast.error('API Not Found')
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
                                                <button data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handleData(item)} className="btn btn-success mx-2">Edit</button>
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

                {
                    editBlog && (
                        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h5 className="modal-title" id="editModalLabel">Update Tour</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <form onSubmit={submitData}>
                                        <div className="modal-body">

                                            <div className="row">

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">
                                                        Blog Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        value={editBlog.title}
                                                        onChange={getData}
                                                        className="form-control"
                                                        placeholder="Enter blog title"
                                                    />
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">
                                                        Image URL
                                                    </label>
                                                    <input
                                                        type="url"
                                                        name="image"
                                                        value={editBlog.image}
                                                        onChange={getData}
                                                        className="form-control"
                                                        placeholder="https://example.com/image.jpg"
                                                    />
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">
                                                        Publish Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        value={editBlog.date}
                                                        onChange={getData}
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label className="form-label fw-semibold">
                                                        Author / Post By
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="post"
                                                        value={editBlog.post}
                                                        onChange={getData}
                                                        className="form-control"
                                                        placeholder="Posted by"
                                                    />
                                                </div>

                                                <div className="col-12 mb-4">
                                                    <label className="form-label fw-semibold">
                                                        Description
                                                    </label>

                                                    <textarea
                                                        name="dis"
                                                        value={editBlog.dis}
                                                        onChange={getData}
                                                        rows="5"
                                                        className="form-control"
                                                        placeholder="Write blog description..."
                                                    ></textarea>
                                                </div>

                                                <div className="col-12 text-center">
                                                    <label className="form-label fw-semibold d-block mb-3">Image Preview</label>

                                                    <img src={editBlog.image || "https://placehold.co/700x350?text=Image+Preview"} alt="Preview" className="img-fluid rounded shadow border" style={{ maxHeight: "250px", objectFit: "cover" }} />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-secondary px-4" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-primary px-4">Update Blog</button>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    )
                }

            </section>




        </div>
    )
}

export default AdminBlog
