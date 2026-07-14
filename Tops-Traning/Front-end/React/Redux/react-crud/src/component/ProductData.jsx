import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from "../slice/ProductSlice";

function ProductData() {

  const { products, pending } = useSelector((state) => state.ProductStore);
  console.log(pending)
  console.log(products)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getproduct())
  }, [])

  return (
    <div>
      <div className="container">
        <h2 className='fw-semibold fs-3 text-center my-4'>Product details</h2>
        <table className="table table-hover table-bordered">
          <thead>
            <tr className='table-dark text-center'>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products && products.map((item, index) => {
                return (
                  <tr key={index} className='text-center'>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.image} alt={item.title} width="80" />
                    </td>
                    <td>{item.category}</td>
                    <td><button className='btn btn-info'>View</button><button className='btn btn-success mx-2'>Edit</button><button className='btn btn-danger'>Delete</button></td>
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

export default ProductData
