import React from 'react'

function D({name, setName}) {
  return (
    <div>
      <h1>This is D component</h1>
      <h2>Name : {name}</h2>
      <button onClick={()=> setName('Raj')}>Change Name </button>
    </div>
  )
}

export default D
