import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDb } from "../user/pages/Firebase";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
    des: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add Product
  const AddProductData = async (e) => {
    e.preventDefault();

    const { title, category, price, image, des } = form;

    if (!title || !category || !price || !image || !des) {
      toast.error("Please fill all fields");
      return false;
    }

    try {
      await addDoc(collection(fireDb, "products"), {
        title,
        category,
        price: Number(price),
        image,
        des,
      });

      toast.success("Product Added Successfully");

      setForm({
        title: "",
        category: "",
        price: "",
        image: "",
        des: "",
      });

      // Redirect to Product Page
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        <div className="card shadow-lg border-0">

          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">
              <i className="fa-solid fa-box-open me-2"></i>
              Add New Product
            </h3>
          </div>

          <div className="card-body">

            <form onSubmit={AddProductData}>

              <div className="row">

                {/* Product Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold"> Product Name </label>

                  <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} placeholder="Enter Product Name"/>
                </div>

                {/* Category */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Category</label>
                  <select className="form-select" name="category"
                    value={form.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Watch">Watch</option>
                  </select>
                </div>

                {/* Price */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Price</label>
                  <input type="number" className="form-control" name="price" value={form.price} onChange={handleChange} placeholder="Enter Price"/>
                </div>

                {/* Image URL */}
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Image URL</label>
                  <input type="text" className="form-control" name="image" value={form.image} onChange={handleChange} placeholder="Paste Image URL" />
                </div>

                {/* Description */}
                <div className="col-12 mb-3">
                  <label className="form-label fw-bold">Description</label>
                  <textarea className="form-control" rows="5" name="des" value={form.des} onChange={handleChange} placeholder="Enter Product Description"></textarea>
                </div>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-success me-2"><i className="fa-solid fa-plus me-2"></i>Add Product</button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}><i className="fa-solid fa-arrow-left me-2"></i>Back</button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AddProduct;