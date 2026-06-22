import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Layout/Pages/Home";
import NotFound from "./Layout/Pages/NotFound";
import DealsPage from "./Layout/Pages/DealsPage";
import CartPage from "./Layout/Pages/CartPage";


function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<NotFound/>}/>
          <Route  path="Deals" element={<DealsPage/>}/>
          <Route path="Cart" element={< CartPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
