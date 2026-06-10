import React from 'react'
import PropTypes from 'prop-types'


function ProductCard({productName, price}) {
  return (
    <div>
      <h2>Product Name : {productName}</h2>
      <p>Price: ${price}</p>
    </div>
  )
}



ProductCard.propTypes ={
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}


export default ProductCard
