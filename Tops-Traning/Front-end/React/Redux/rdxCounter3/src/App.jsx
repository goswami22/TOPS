import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './redux/counterSlice'

function App() {

  const mydata =useSelector((mystore)=> mystore.counterStore.count)


 const dispatch =useDispatch()

  return (
    <div>
      <h1>Counter : {mydata}</h1>
    <button onClick={()=> dispatch(increament())}>Increament</button>
    <button onClick={()=> dispatch(decreament())}>decrement</button>
    </div>
  )
}

export default App
