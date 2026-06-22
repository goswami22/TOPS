import React, { useState } from 'react'

function State() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Bhavesh')
  return (
    <div>

      <h1>Count : {count}</h1>

      <h1>name : {name} </h1>


      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setName('Rj')}>Click</button>
    </div>
  )
}

export default State
