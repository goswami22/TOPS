import React from 'react'
import "./external.css"

function Style() {
    let h2 = {
        color : 'red',
        fontSize : '25px'
    }




  return (
    <div>
      <h1 className='main'>This is External Style css</h1>
      <h2 style={h2}>This is internal Css</h2>
      <h3 style={{color: 'Green', fontSize: '50px'}}>This is inline css</h3>
    </div>
  )
}

export default Style
