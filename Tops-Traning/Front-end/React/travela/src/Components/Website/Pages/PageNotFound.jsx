import React from 'react'
import Header from '../Comm/Header'
import Hero from '../Comm/Hero'
import Subscribe from '../Comm/Subscribe'
import Footer from '../Comm/Footer'

function PageNotFound() {
  return (
    <div>
      <Header />
      <Hero />
      {/* 404 Start */}
      <div className="container-fluid py-5" style={{ background: 'linear-gradient(rgba(19, 53, 123, 0.3), rgba(19, 53, 153, 0.3))', objectFit: 'cover' }}>
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4 text-dark">Page Not Found</h1>
              <p className="mb-4 text-dark">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="index.html">Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}


      <Subscribe />
      <Footer />

    </div>
  )
}

export default PageNotFound
