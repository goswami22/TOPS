      {/* use context

        1) create context : inbuilt 

        2) Provider context : data pass

        3) usecontext : directly access
      
      */}


import React, { createContext, use, useState } from 'react'
import NewB from './NewB'
import NewC from './NewC'
import NewD from './NewD'


export const data = createContext()

function NewA() {

    const [name, setname] = useState('Bhavesh')
    const [form, setform] = useState({
        fname : 'Raj',
        count : 0
    })
    
    return (
    <div>
      <h1>This is New A  Component</h1>
    
        <h1>Name : {name}</h1>


        <data.Provider value={{name,setname, form, setform}}>
            <NewB/> 
            <NewC/>
            <NewD/>
        </data.Provider>







    </div>
  )
}

export default NewA
