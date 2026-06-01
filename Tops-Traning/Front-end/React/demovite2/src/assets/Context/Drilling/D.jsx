import React from 'react'
    
function D({name, setname}) {
  return (
    <div>
        <h1>This is D component</h1> 

        <h1>D name : {name}</h1>
        <button onClick={()=> setname("Raj")}>Change name</button>

    </div>
  )
}

export default D
