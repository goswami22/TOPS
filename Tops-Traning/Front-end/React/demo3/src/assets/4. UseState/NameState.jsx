import React, { useState } from 'react'

function NameState() {
    
    const [name , setName] = useState('Bhavesh')
    return (
    <div>
      

        <h1>name : {name} </h1>
        

        <button onClick={()=> setName("Raj")}>click</button>
    </div>
  )
}

export default NameState
