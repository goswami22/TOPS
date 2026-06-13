import React from 'react'

function CartSummary() {

    const cartItem = [
        {
            name: 'iPhone',
            price: 80000
        },
        {
            name: 'AirPods',
            price: 20000
        },
        {
            name: 'Charger',
            price: 2000
        }

    ]


    return (
        <div>
            {

                (cartItem.length)? (
                    cartItem.map((item, index)=> (
                        <ul key={index}>
                            <li><h2>{item.name}- {item.price}</h2></li>
                        </ul>
                    ))
                ) : (
                    <h2>Cart is empty</h2>
                )

            }

            {
                (cartItem.length >= 3) && (
                    <button>Checkout now</button>
                )
            }
        </div>
    )
}

export default CartSummary
