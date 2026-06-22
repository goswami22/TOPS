import React, { useEffect, useState } from 'react'

function UseEffect() {
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Bhavesh')

    useEffect(()=>{
        console.log(`Welcome Back , ${name}`)
    },[name])

    return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increement</button>
        <button onClick={()=> setName('Rakesh')}>Change name </button>
    </div>
  )
}

export default UseEffect
