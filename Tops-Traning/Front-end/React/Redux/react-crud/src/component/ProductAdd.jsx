import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addproduct } from '../slice/ProductSlice'

function ProductAdd() {

    const redirect = useNavigate()
    const [prodcutData, setProdcutData] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        image: '',
        category: ''
    })

    const getChange = (e) => {
        setProdcutData({
            ...prodcutData,
            id : new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(prodcutData)
    }

    const dispatch = useDispatch()

    const submitData = async (e) => {
        e.preventDefault()

        const {title, image, description, price, category } = prodcutData

        if(title == '' || image == '' || description == '' || price == '' || category == '') {
            alert('Please full fields')
            return false
        }

        try {
            dispatch(addproduct(prodcutData))
            setProdcutData({
                id: '',
                title: '',
                description: '',
                price: '',
                image: '',
                category: ''
            })
            redirect('/')


        } catch (error) {
            console.log('API Not Found')
        }

    }

    return (
        <div>
            <div className="container my-5">
                <h2 className='text-center fw-semibold'>Add Products</h2>
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <form onSubmit={submitData}>
                            <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">Product Image</label>
                                <input type="url" name='image' value={prodcutData.image} onChange={getChange} className="form-control" placeholder='Add Prodcut URL' id="productImage" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="producttitle" className="form-label">Product Title</label>
                                <input type="text" name='title' value={prodcutData.title} onChange={getChange} className="form-control" placeholder='Enter Product Title' id="producttitle" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productprice" className="form-label">Product Price</label>
                                <input type="text" name='price' value={prodcutData.price} onChange={getChange} className="form-control" placeholder='Enter Prodcut Price' id="productprice" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productcategory" className="form-label">Category</label>
                                <input type="text" name='category' value={prodcutData.category} onChange={getChange} className="form-control" placeholder='Enter product Category' id="productcategory" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productdescription" className="form-label">Product Description</label>
                                <textarea type="text" name='description' value={prodcutData.description} onChange={getChange} className="form-control" placeholder='Enter Product Description' id="productdescription" rows={5} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Pruduct</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdd
