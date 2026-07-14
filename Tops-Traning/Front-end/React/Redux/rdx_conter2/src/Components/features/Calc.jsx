import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../app/Counterslice'

function Calc() {
  
    const {value }= useSelector((state)=>state.count)

  const dispatch = useDispatch()
    return (
    <div>
      <h1>Calculater : {value}</h1>

    <button onClick={()=> dispatch(add())}>Add</button>

    </div> 
  )
}

export default Calc
