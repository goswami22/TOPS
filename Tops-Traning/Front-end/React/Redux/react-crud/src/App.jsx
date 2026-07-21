import React from 'react'
import ProductData from './component/productData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ProductAdd from './component/ProductAdd'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductData />} />
          <Route path='/productadd' element={<ProductAdd />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </div>
  )
}

export default App
