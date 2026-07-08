import React, { createContext, useState } from 'react'
import Navbar from './Navbar'

export const userContext = createContext() 


function UserContext() {

    const [userName, setUserName] = useState({
        username: 'Bhavesh',
        isLogin : true    

    })

  return (
    <div>
        

        <userContext.Provider value={{userName, setUserName}}>
            <Navbar/>
        </userContext.Provider>
 
    </div>
  )
}

export default UserContext
