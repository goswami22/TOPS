import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Components/Website/Pages/Home'
import About from './Components/Website/Pages/About'
import Services from "./Components/Website/Pages/Services";
import Packeges from "./Components/Website/Pages/Packeges";
import Blog from "./Components/Website/Pages/Blog";
import Contact from "./Components/Website/Pages/Contact";
import Destination from "./Components/Website/Pages/Destination";
import Tour from "./Components/Website/Pages/Tour";
import Booking from "./Components/Website/Pages/Booking";
import Gallary from "./Components/Website/Pages/Gallary";
import Guides from "./Components/Website/Pages/guides";
import Testimonial from "./Components/Website/Pages/Testimonial";
import PageNotFound from "./Components/Website/Pages/PageNotFound";
import AdminDash from "./Components/Admin/Apages/AdminDash";
import AdminBlog from "./Components/Admin/Apages/AdminBlog";
import AdminDestination from "./Components/Admin/Apages/AdminDestination";
import ExpolorTour from "./Components/Admin/Apages/AExpolorTour";
import TravelGuid from "./Components/Admin/Apages/TravelGuid";
import AGallery from "./Components/Admin/Apages/AGallery";
import AServices from "./Components/Admin/Apages/AServices";
import AExpolorTour from "./Components/Admin/Apages/AExpolorTour";




function App() {
  return (
    <div>

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/packages" element={<Packeges />}/>
            <Route path="//blog" element={<Blog />}/>
            <Route path="/destination" element={<Destination />}/>
            <Route path="/tour" element={<Tour />}/>
            <Route path="/booking" element={<Booking />}/>
            <Route path="/gallery" element={<Gallary />}/>
            <Route path="/guides" element={<Guides />}/>
            <Route path="/testimonial" element={<Testimonial />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<PageNotFound />}/>



          {/* Private router for dashboad */}
          <Route path="/admin" element={<AdminDash />}/>
          <Route path="/AdminBlog" element={<AdminBlog />}/>
          <Route path="/Adesination" element={<AdminDestination />}/>
          <Route path="/Atour" element={<AExpolorTour />}/>
          <Route path="/Agallery" element={<AGallery />}/>
          <Route path="/AtravelGuid" element={<TravelGuid />}/>
          <Route path="/Aservices" element={<AServices />}/>
          



          </Routes>
        
        </BrowserRouter>

    </div>
  )
}

export default App
