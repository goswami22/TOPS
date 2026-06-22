import React, { useRef } from 'react'
import useCustomCount from '../ComstomHokks/useCustomCount'

function UseRef() {

    const {count, Increament} = useCustomCount(0)
    const refEle = useRef()

    const data = () => {
        refEle.current.focus()
        refEle.current.style.backgroundColor = 'gray'
    }

    const chstyle = () => {
        refEle.current.style.background = "blue";
        refEle.current.style.color = "white";
    }

    
  return (
    <div>
        
        <input type="text"  placeholder='name' ref={refEle}/><br />
        <button type='button' className='border-2 border-red-800 p-2' onClick={data}>Data</button><br />
        <button type='button' className='border-2 border-red-800 p-2' onClick={chstyle}>style</button>
        
        <br />
        <h1>count : {count}</h1>
        <button className='border-2 border-green-800 p-2' onClick={Increament}>Add Value</button>
    </div>
  )
}

export default UseRef
