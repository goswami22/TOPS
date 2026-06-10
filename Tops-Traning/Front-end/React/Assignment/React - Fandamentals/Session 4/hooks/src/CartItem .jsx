import React, { useState } from 'react'

function CartItem ({name,quantity}) {


    const [itemquantity, setitemquantity] = useState(quantity)


  return (
    <div>
      <h3>{name}</h3>
      <p>Quantity: {itemquantity}</p>
      <button onClick={()=>{setitemquantity(itemquantity + 1)}}>+</button>
      <button onClick={()=>{setitemquantity(itemquantity - 1)}}>-</button>
    </div>
  )
}

export default CartItem 
