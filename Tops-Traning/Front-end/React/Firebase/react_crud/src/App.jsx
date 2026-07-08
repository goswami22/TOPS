import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import AddUser from './components/Layout/user/pages/AddUser'
// import GetUser from './components/Layout/user/pages/GetUser'
// import UpdateUser from './components/Layout/user/pages/UpdateUser'
// import DeleteUser from './components/Layout/user/pages/DeleteUser'
import { ToastContainer } from "react-toastify";
import Product from './components/Layout/product/Product';
import AddProduct from './components/Layout/product/AddProduct';
import { Routes, Route } from "react-router-dom";
import UpdateProduct from './components/Layout/product/UpdateProduct';

function App() {
  return (
    <div>

        <ToastContainer
          autoClose={2000} />

      <Routes>

        {/* <AddUser/>
      <UpdateUser/>
      <GetUser/>
      <DeleteUser/> */}
        <Route path="/" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        {/* <Route path="/updateproduct" element={<UpdateProduct/>}/> */}
        {/* <Route path="/update-product/:id" element={<UpdateProduct />} /> */}
        <Route path="/updateProduct" element={<UpdateProduct />} />
      </Routes>
    </div>
  )
}

export default App
