import React, { useState } from 'react'

function Rating() {

    const [rating, setRating] = useState(0)
    const stars = [1, 2, 3, 4, 5]


    return (
        <div>
            <h2>zometo rating Selecter ⭐</h2>

            {
                stars.map((star) =>

                    <span key={star}
                        onClick={() => setRating(star)}
                        style={{
                            fontSize: '30px',
                            cursor: 'pointer',
                            color: star <= rating ? 'gold' : 'gray'
                        }}

                    >
                        ★
                    </span>
                )}

            <h3>Your rating : {rating}</h3>


        </div>
    )
}

export default Rating
