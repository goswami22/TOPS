import React, { use, useState } from 'react'

function LikeButton() {

    const [like, setlike] = useState(0)

  return (
    <div>
        <h2>Like : {like}</h2>
        <button onClick={()=>setlike(like + 1)}>Increment </button>
    </div>
  )
}

export default LikeButton
