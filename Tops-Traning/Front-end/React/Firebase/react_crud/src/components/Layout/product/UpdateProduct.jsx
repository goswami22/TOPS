import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { fireDb } from "../user/pages/Firebase";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateProduct() {
    
    const location = useLocation()
    const navigate = useNavigate()

    const [form, setForm] = useState(location.state);

    // Get Single Product
    const getSingleProduct = async (e) => {
        e.preventDefault()
        try {

            await updateDoc(doc(fireDb, 'products', form.id),form)
            toast.success('Product Update successfullly')
            navigate("/");
            
        } catch (error) {
            console.log('Api not found');
            
        }
    };

    // Handle Input Change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Update Product
    

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">

                <div className="card shadow-lg border-0">

                    <div className="card-header bg-warning text-dark">
                        <h3 className="mb-0">
                            <i className="fa-solid fa-pen-to-square me-2"></i>
                            Update Product
                        </h3>
                    </div>

                    <div className="card-body">

                        <form onSubmit={getSingleProduct}>

                            <div className="row">

                                {/* Product Name */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-bold">Product Name</label>

                                    <input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} />
                                </div>

                                {/* Category */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-bold">Category</label>

                                    <select className="form-select" name="category"
                                        value={form.category} onChange={handleChange}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Watch">Watch</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Shoes">Shoes</option>
                                    </select>
                                </div>

                                {/* Price */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-bold"> Price </label>
                                    <input type="number" name="price" className="form-control" value={form.price} onChange={handleChange} />
                                </div>

                                {/* Image URL */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-bold"> Image URL </label>
                                    <input type="text" name="image" className="form-control" value={form.image} onChange={handleChange} />
                                </div>

                                {/* Description */}
                                <div className="col-12 mb-3">
                                    <label className="form-label fw-bold"> Description </label>

                                    <textarea name="des" rows="5" className="form-control" value={form.des} onChange={handleChange} ></textarea>
                                </div>

                            </div>

                            <div className="text-end">

                                <button type="submit" className="btn btn-warning me-2"><i className="fa-solid fa-floppy-disk me-2"></i>Update Product</button>

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => navigate("/")}
                                >
                                    <i className="fa-solid fa-arrow-left me-2"></i>
                                    Back
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default UpdateProduct;