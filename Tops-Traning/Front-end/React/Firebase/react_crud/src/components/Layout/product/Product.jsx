import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fireDb } from '../user/pages/Firebase';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';

function Product() {

    const navigate = useNavigate()

    useEffect(() => {
        getProduct()
    }, [])

    const [product, setProduct] = useState([])


    const getProduct = () => {
        try {

            const productRef = query(collection(fireDb, 'products'))

            const data = onSnapshot(productRef, (Snapshot) => {
                const viewProduct = Snapshot.docs.map((pdata) => {
                    return {
                        id: pdata.id,
                        ...pdata.data()
                    }
                })
                setProduct(viewProduct)
            })
            return data;

        } catch (error) {
            toast.error('API Not Found')
        }
    }

    // Delete product
    const deleteProduct = async (id) => {
        try {
            await deleteDoc(doc(fireDb, 'products', id))
            toast.success('Product deleted successfully')
        } catch (error) {
            toast.error('Delete failed')
        }
    }


    return (
        <div className="bg-light min-vh-100">

            {/* Header */}
            <header className="bg-white shadow-sm py-3 mb-4 position-sticky top-0 z-1">
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className="fw-bold m-0" style={{fontSize: 'clamp(24px, 2vw, 45px)'}}>Product Management</h2>

                    <NavLink className="btn btn-success" style={{textWrap: 'nowrap'}} to={'/addProduct'}>
                        <i className="fa-solid fa-plus me-2"></i>
                        Add Product
                    </NavLink>

                </div>
            </header>

            {/* Content */}
            <div className="container">

                <div className="card shadow border-0">
                    <div className="card-header bg-white">

                        <div className="row align-items-center">

                            <div className="col-md-12 text-center py-3">
                                <h4 className="mb-0 fw-semibold">All Products</h4>
                            </div>

                            {/* <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Product..."
                                />
                            </div> */}

                        </div>

                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover align-middle">

                                <thead className="table-dark">
                                    <tr className='text-center'>
                                        <th width="70">ID</th>
                                        <th>IMAGE</th>
                                        <th>PRODUCT NAME</th>
                                        <th>CATEGORY</th>
                                        <th>PRICE</th>
                                        <th width="220">ACTION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        product && product.map((item, index) => {
                                            return (
                                                <tr key={index} className='text-center'>
                                                    <td>{item.id}</td>

                                                    <td><img src={item.image} alt="product image" style={{
                                                        maxWidth: '150px', height: '150px', objectFit:
                                                            'contain',objectPosition: 'center',mixBlendMode: 'multiply'
                                                    }} /></td>
                                                    <td>{item.title.slice(0, 30)}...</td>

                                                    <td>{item.category}</td>

                                                    <td>${item.price}</td>

                                                    <td>
                                                        <button
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => navigate("/view-product", { state: item })}>
                                                            <i className="fa-solid fa-eye"></i>
                                                        </button>

                                                        <Link className="btn btn-warning btn-sm m-2" to={'/updateProduct'} state={item}>
                                                            <i className="fa-solid fa-pen"></i>
                                                        </Link>

                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(item.id)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Product;