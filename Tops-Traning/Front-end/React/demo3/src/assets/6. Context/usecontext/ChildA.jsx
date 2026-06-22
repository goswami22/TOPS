import React, { createContext, useState } from 'react'
import ChildC from './ChildC'

export const data = createContext()

function ChildA() {
    const [name, setName] = useState("Tushar")

  return (
    <div>

        <data.Provider value={{name, setName}}>
            <ChildC/>
        </data.Provider>
        
    </div>
  )
}

export default ChildA

