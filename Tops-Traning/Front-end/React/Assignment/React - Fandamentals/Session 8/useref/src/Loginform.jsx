import React, { useRef, useState } from 'react'

function Loginform() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const usernameRef = useRef()

    const formsubmit =(e) => {
        e.preventDefault()

        console.log(`User name: ${username},  password : ${password}`)

        setUsername('')
        setPassword('')
        

        usernameRef.current.focus()

    }


  return (
    <div>
        <form action="" onSubmit={formsubmit}>
            <input type="text" placeholder='User Name' value={username} onChange={(e)=> setUsername(e.target.value)} ref={usernameRef}/>
            &nbsp;&nbsp;&nbsp;
            <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            &nbsp;&nbsp;&nbsp;
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Loginform
