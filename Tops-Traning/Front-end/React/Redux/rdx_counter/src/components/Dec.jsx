import React from 'react'
import { useDispatch } from 'react-redux'
import { decreament } from '../counterSlice'

function Dec() {
  
        const dispatch = useDispatch()

    return (
    <div>

      <button onClick={()=> dispatch(decreament())}>Decreament</button>
    </div>
  )
}

export default Dec
