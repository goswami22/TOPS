import React, { useState } from 'react'

function CartItem ({name,quantity = 1}) {


    const [itemquantity, setitemquantity] = useState(quantity)

    const IncreamentQty = () => {
      setitemquantity(itemquantity + 1)
    }

    const DecreamentQty = () => {
      if(itemquantity > 0){
        setitemquantity(itemquantity - 1)
      }
      else {
        alert('itemquantity not allow below 0')
      }
    }

  return (
    <div>
      <h3>{name}</h3>
      <p>Quantity: {itemquantity}</p>
      <button onClick={()=>{IncreamentQty()}}>+</button>
      <button onClick={()=>{DecreamentQty()}}>-</button>
    </div>
  )
}

export default CartItem 
