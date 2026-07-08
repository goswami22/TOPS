import React, { useContext } from 'react'
import { userContext } from './UserContext'

function Navbar() {

    const {userName, setUserName} = useContext(userContext)
    

  return (
    <div>
        <header>    
            <p>Welcome {userName.username} </p>           
        </header>
    </div>
  )
}

export default Navbar
