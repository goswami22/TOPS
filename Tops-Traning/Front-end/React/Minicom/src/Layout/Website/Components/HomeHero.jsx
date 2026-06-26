import React from 'react'

function HomeHero() {
  return (
    <div>
      <section id='hero'>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                    <div className="content">
                        <span className="subtilte text-uppercase fw-bold mb-4 d-inline-block"><small>why choose us</small></span>
                        <h1 className="title fw-bold fs-1 lh-base mb-4">Beyond Furniture Creating A Lifestyle</h1>
                        <p className='mb-5'>With thousands of satisfied customers, Minicom is a trusted name in quality furniture. Our thoughtfully designed pieces bring comfort, style, and functionality to every home. Experience the difference today!</p>
                        <div className="content-bottom d-flex align-items-center">
                            <a href="" className='main-btn me-4'>learn more <i className="fa-solid fa-arrow-right"></i></a>
                            <img src="/image/hero-multiimage.webp" alt="image" className='img-fluid d-none d-md-block'/>
                            <span className="text ms-md-4">TRUSTED BY THOUSANDS <br/>LOVED BY HOMES</span>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 col-lg-1"></div> */}
                <div className="col-12 col-lg-8 ">
                    <img src="/image/Hero-banner.webp" alt="hero banner" className='img-fluid hero-image'/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomeHero
