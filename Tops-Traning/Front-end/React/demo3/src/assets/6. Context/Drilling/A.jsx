import React, { useState } from 'react'
import B from './B'



function A() {
  const [name , setName ] = useState("Bhavesh")
  return (
    <div>
      <h1>This is A component</h1>

      <B name={name} setName={setName}/>
    </div>
  )
}

export default A
