import React, { createContext } from 'react'



const UserContext = createContext({
  username: 'Bhavesh',
  islogin: true
})

export default UserContext;
