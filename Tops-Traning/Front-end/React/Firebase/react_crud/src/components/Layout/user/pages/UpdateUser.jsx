import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fireDb } from "./Firebase";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        category: "",
        price: "",
        image: "",
        des: "",
    });

    // Get Single User
    useEffect(() => {
        updateProductData();
    }, []);

    const updateProductData = async () => {

        const docRef = doc(fireDb, "products", id);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setForm(docSnap.data());
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const updateUser = async (e) => {

        e.preventDefault();

        await updateDoc(doc(fireDb, "User", id), form);

        alert("User Updated Successfully");

        navigate("/");
    };

    return (
        <div className="container mt-5">

            <form onSubmit={updateUser}>

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control mb-3"
                />

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control mb-3"
                />

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-control mb-3"
                />

                <button className="btn btn-primary">
                    Update User
                </button>

            </form>

        </div>
    );
}

export default UpdateProduct;