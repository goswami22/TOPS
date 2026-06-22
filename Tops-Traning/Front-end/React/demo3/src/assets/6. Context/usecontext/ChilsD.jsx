import React, { useContext } from 'react'
import { data1 } from './ChildB'



function ChilsD() {

    const {count, setCount} = useContext(data1)

  return (
    <div style={{background: 'green', padding: '10px'}}>
      
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increament</button>

    </div>
  )
}

export default ChilsD
