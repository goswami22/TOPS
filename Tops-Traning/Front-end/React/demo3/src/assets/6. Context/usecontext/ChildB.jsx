import React, { createContext, useState } from 'react'
import ChilsD from './ChilsD'
 
export const data1 = createContext()

function ChildB() {

    const [count , setCount] = useState(0)

  return (
    <div style={{background: 'red', padding: '10px'}}>
      

    <data1.Provider value={{count, setCount}}>
        <ChilsD/>    
    </data1.Provider>


    </div>
  )
}

export default ChildB
