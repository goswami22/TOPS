import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { fireDb } from "./Firebase";
import { toast } from "react-toastify";

function GetUser() {

    const [users, setUsers] = useState([])

    const getUser = async () => {
        try {
            const userdata = query(collection(fireDb, "User"));
            const data = onSnapshot(userdata, (QuerySnapshot) => {
                const viewdata = QuerySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                })
                
                setUsers(viewdata)
                toast.success('View all User Successfully')

            })
            return data


        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <h2>Get Users</h2>

            <button onClick={getUser}>
                Get Users
            </button>


            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h3>Name : {user.name}</h3>
                            <h3>Email : {user.email}</h3>
                            <h3>Password : {user.password}</h3>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GetUser;