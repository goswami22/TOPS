import React, { useState } from 'react'

function SearchBar() {

    const [product,setproduct] = useState('')

  return (
    <div>
        
        <h2>Flipkart search</h2>
        <input type="text"  value={product} onChange={(e)=> setproduct(e.target.value) }/>


        <h3>Search for : {product}</h3>
    </div>
  )
}

export default SearchBar
