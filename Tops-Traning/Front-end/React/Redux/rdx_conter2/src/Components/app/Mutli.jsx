import React from 'react'
import { useDispatch } from 'react-redux'
import { multi } from './Counterslice'

function Mutli() {
  
  const dispatch = useDispatch()
  
    return (
    <div>
      <button onClick={()=> dispatch(multi())}>Multiplication</button>
    </div>
  )
}

export default Mutli
