import React from 'react'
import C from './C'

function B({name, setName}) {
  return (
    <div>
      <h1>This is B component</h1>
      <C name={name} setName={setName}/>
    </div>
  )
}

export default B
