import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CreateUsers from './CreateUsers'
import { Modal } from 'bootstrap'
import axios from 'axios'

function ShowUsers() {

    // get Data 

    useEffect(() => {
        fetchData()
    }, [])

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const url = 'https://6a057850aa826ca75c09e2bd.mockapi.io/Users'
            const res = await axios.get(url)
            setData(res.data)

        } catch (error) {
            alert('Api not found', error)
        }
    }

    // put User
    const [editModal, setEditModal] = useState()
    const [edituser, setEditUser] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        address: ''
    })

    // const getData = (e) => {
    //     setEditUser({
    //         ...edituser,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const getData = (e) => {
        const { name, value } = e.target;

        setEditUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    // const handleData = (data) => {
    //     setEditUser(data)
    //     setEditModal(data)
    // }

    const handleData = (user) => {
        setEditUser({
            id: user.id,
            name: user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            age: user.age || "",
            address: user.address || ""
        });

        setEditModal(true);
    };

    // const updateUser = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const res = await axios.put(`https://6a057850aa826ca75c09e2bd.mockapi.io/Users/${edituser.id}`, edituser)
    //         setData(res.data)
    //     } catch (error) {
    //         console.log('api not found', error)
    //         alert('Api not Found')
    //     }
    // }

    const updateUser = async (e) => {
        e.preventDefault();

        try {
            const url = `https://6a057850aa826ca75c09e2bd.mockapi.io/Users/${edituser.id}`;

            const res = await axios.put(url, edituser);

            // Update table data
            setData((prevData) =>
                prevData.map((user) =>
                    String(user.id) === String(res.data.id)
                        ? res.data
                        : user
                )
            );

            // Close modal
            // const modalElement = document.getElementById('userModal');

            // if (modalElement) {
            //     const modalInstance = Modal.getInstance(modalElement);
            //     modalInstance?.hide();
            // }

            const modalElement = document.getElementById("userModal");

            if (modalElement) {
                const modalInstance = Modal.getInstance(modalElement);

                if (modalInstance) {
                    modalInstance.hide();
                }
            }   

            alert('User updated successfully!');

        } catch (error) {
            console.error(error);
            alert('Failed to update user');
        }

        
    };


    // Delete Data
    const DeleteUser = async (id) => {
        try {
            const res = await axios.delete(`https://6a057850aa826ca75c09e2bd.mockapi.io/Users/${id}`)
            setData((prevData) =>
                prevData.filter((user) => user.id !== id))
        } catch (error) {
            alert('Api Not Found')
        }
    }





    return (
        <div className="container py-5">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Users Management</h2>
                    <p className="text-secondary mb-0">
                        Manage and view all registered users
                    </p>
                </div>

                <NavLink to='/' className="btn btn-success px-4">
                    <i className="bi bi-person-plus-fill me-2"></i>
                    Add User
                </NavLink>
            </div>



            {/* Users Table */}
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-header bg-white py-3">
                    <h5 className="fw-bold mb-0">All Users</h5>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th className="px-4 py-3">ID</th>
                                <th className="py-3">Name</th>
                                <th className="py-3">Age</th>
                                <th className="py-3">Email</th>
                                <th className="py-3">Phone</th>
                                <th className="py-3">Address</th>
                                <th className="py-3 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data && data.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.address}</td>
                                            <td className="text-center">
                                                <button className="btn btn-sm btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#userModal" onClick={() => handleData(user)}>
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>

                                                <button className="btn btn-sm btn-outline-danger" onClick={() => { DeleteUser(user.id) }}>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                // {/* Modal for update */}
                                // <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                //     <div class="modal-dialog">
                                //         <div class="modal-content">
                                //             <div class="modal-header">
                                //                 <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                //             </div>
                                //             <div class="modal-body">

                                //             </div>
                                //             <div class="modal-footer">
                                //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                //                 <button type="button" class="btn btn-primary">Save changes</button>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                            }


                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="card-footer bg-white py-3">
                    <small className="text-secondary">
                        Total Users: {data.length}
                    </small>
                </div>
            </div>
            {/* Updata user */}

            {editModal && (

                <div
                    className="modal fade"
                    id="userModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content border-0 rounded-4 shadow-lg">

                            {/* Modal Header */}
                            <div className="modal-header bg-primary text-white px-4 py-3 border-0 rounded-top-4">
                                <div>
                                    <h5 className="modal-title fw-bold mb-1" id="exampleModalLabel">
                                        <i className="bi bi-person-gear me-2"></i>
                                        Edit User
                                    </h5>
                                    <small className="opacity-75">
                                        Update user information below
                                    </small>
                                </div>

                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            {/* Modal Body */}
                            <div className="modal-body p-4">
                                <form onSubmit={updateUser}>

                                    <div className="row g-3">

                                        {/* Name */}
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label fw-semibold">
                                                Full Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                id="name"
                                                name="name"
                                                value={edituser.name || ""}
                                                onChange={getData}
                                                placeholder="Enter full name"
                                                required
                                            />
                                        </div>

                                        {/* Age */}
                                        <div className="col-md-6">
                                            <label htmlFor="age" className="form-label fw-semibold">
                                                Age <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form-control-lg"
                                                id="age"
                                                name="age"
                                                value={edituser.age || ""}
                                                onChange={getData}
                                                placeholder="Enter age"
                                                min="1"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label fw-semibold">
                                                Email Address <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="email"
                                                name="email"
                                                value={edituser.email || ""}
                                                onChange={getData}
                                                placeholder="example@email.com"
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label fw-semibold">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control form-control-lg"
                                                id="phone"
                                                name="phone"
                                                value={edituser.phone || ""}
                                                onChange={getData}
                                                placeholder="Enter phone number"
                                            />
                                        </div>

                                        {/* Address */}
                                        <div className="col-12">
                                            <label htmlFor="address" className="form-label fw-semibold">
                                                Address
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                rows="3"
                                                value={edituser.address || ""}
                                                onChange={getData}
                                                placeholder="Enter complete address"
                                            ></textarea>
                                        </div>

                                    </div>

                                    {/* Form Actions */}
                                    <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                                        <button
                                            type="button"
                                            className="btn btn-light border px-4 py-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-primary px-4 py-2 fw-semibold"
                                        >
                                            <i className="bi bi-check2-circle me-2"></i>
                                            Update User
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            )
            }

        </div>
    )
}

export default ShowUsers