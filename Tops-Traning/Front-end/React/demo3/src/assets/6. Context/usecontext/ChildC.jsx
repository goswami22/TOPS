import React, { useContext } from 'react'
import {data} from './ChildA'

function ChildC() {

    const { name, setName } = useContext(data)


  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={()=> setName('Mehul')}>Change name with UseContext</button>
    </div>
  )
}

export default ChildC
