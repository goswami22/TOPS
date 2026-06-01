import React, { useContext } from 'react'
import { data } from './NewA'


function NewD() {
    const {name, setname} = useContext(data)
  return (
    <div>
      <h1>This is D Component</h1>

        <h1>D name : {name}</h1>
        <button onClick={()=> setname('Janak')}>Change Name</button>

    </div>
  )
}

export default NewD
