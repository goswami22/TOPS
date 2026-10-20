import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './FrontEnd/Components/Website/Comman/Header'
import Footer from './FrontEnd/Components/Website/Comman/Footer'
import Home from './FrontEnd/Components/Website/pages/Home'
import About from './FrontEnd/Components/Website/pages/About'
import Shop from './FrontEnd/Components/Website/pages/Shop'
import Product_details from './FrontEnd/Components/Website/pages/Product_details'
import Shop_Cart from './FrontEnd/Components/Website/pages/Shop_Cart'
import Checkout from './FrontEnd/Components/Website/pages/Checkout'
import Blog_details from './FrontEnd/Components/Website/pages/Blog_details'
import Blog from './FrontEnd/Components/Website/pages/Blog'
import Contact from './FrontEnd/Components/Website/pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product_details' element={<Product_details />} />
          <Route path='/shop_cart' element={<Shop_Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog_details' element={<Blog_details />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
