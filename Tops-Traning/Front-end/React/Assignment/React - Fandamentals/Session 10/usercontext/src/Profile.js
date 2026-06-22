import React, { useContext } from 'react'
import UserContext from './UserContext'


function Profile() {
  
  const user = useContext(UserContext)
  
    return (
    <div>
      <h2>Username : {user.username}</h2>
      <p><strong>Loged In: {user.islogin ? "Yes" : "No"}</strong></p>
    </div>
  )
}

export default Profile;
