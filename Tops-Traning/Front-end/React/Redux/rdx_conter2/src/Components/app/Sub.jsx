import React from 'react'
import { useDispatch } from 'react-redux'
import { sub } from './Counterslice'



function Sub() {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(sub()) }>Substraction</button>
    </div>
  )
}

export default Sub
