import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { fireDb } from './Firebase'

function DeleteUser() {

    const deleteUserData = async () => {
        const deleteUser = doc(fireDb, "User", 'tZSV45locQWOAczltGFB')

        await deleteDoc(deleteUser)
        alert('Delete User successfull')

    }

  return (
    <div>
      <h2>Delete user</h2>
      <button onClick={deleteUserData}>Delete user</button>
    </div>
  )
}

export default DeleteUser
