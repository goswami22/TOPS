import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament } from '../counterSlice'


function Counter() {

    const cnt = useSelector((state)=>state.count.value )
    const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter:{cnt}</h1>

      <button onClick={()=> dispatch(increament())}>Increament</button>
    </div>
  )
}

export default Counter
