import React from 'react'
import C from './c'


function B({name, setname}) {
  return (
    <div>
      <h1>This is B Component</h1>
      <h1>B name : {name}</h1>


    <C name={name} setname={setname} />


    </div>
  )
}

export default B
