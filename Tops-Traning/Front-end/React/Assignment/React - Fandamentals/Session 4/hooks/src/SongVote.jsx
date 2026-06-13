import React, { useState } from 'react'

function SongVote() {
  
  const [votes, setvotes] = useState(0)

  const upvote = () => {
    setvotes(votes + 1)
  }

  const downvote = () => {
    if(votes > 0){
        setvotes(votes - 1)
    }
  }

  
    return (
    <div>
      <h2>Spotify playlist song</h2>

      <h3>{votes}</h3>


        <button onClick={upvote}>Up vote</button>
        <button onClick={downvote}>Down vote</button>


    </div>
  )
}

export default SongVote
