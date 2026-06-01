import React from 'react'
import { useState } from 'react'
import B from './B'


function A() {

  const [name, setname]  = useState("Bhavesh")
  


  return (
    <div>
      <h1>A Name is: {name}</h1>

      <B name={name} setname={setname}/>

    </div>
  )
}

export default A
