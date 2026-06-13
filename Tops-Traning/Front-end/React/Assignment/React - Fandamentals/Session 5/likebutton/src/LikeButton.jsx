import React, { useState } from 'react'

function LikeButton() {

    const [count, setCount] = useState(0)


  return (
    <div>
      <h2>Like: {count}</h2>
    
        <button onClick={()=> setCount(count + 1)}>like</button>
    </div>
  )
}

export default LikeButton
