import React from 'react'

function CuratedPicksProduct({image, title, subTitle, discription}) {
  return (
    <div>
      <div className="curatedProduct d-flex align-items-center gap-4 bg-white rounded">
        <div className="image-area">
            <img src={image} alt='image' className='img-fluid w-100 h-100'/>
        </div>
        <div className="content-area">
            <span><small>{subTitle}</small></span>
            <h3>{title}</h3>
            <p>{discription}</p>
            <a href="#" className='product-link text-black text-decoration-none'>learn more <span><i className="fa-solid fa-arrow-right"></i></span></a>
        </div>
      </div>
    </div>
  )
}

export default CuratedPicksProduct
