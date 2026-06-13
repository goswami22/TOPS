import React, { useState } from 'react'

function LoginForm() {
    
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    
    const submitform = (e) => {
        e.preventDefault()
        

        setUsername("")
        setPassword("")
        alert(`username: ${username} password : ${password}`)
    } 

    return (
    <div>
      


        <form onSubmit={submitform}>
            <input type="text" value={username} placeholder="Enter User Name" onChange={(e)=> setUsername(e.target.value)}/>
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} />

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default LoginForm
