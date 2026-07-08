import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { fireDb } from "./Firebase";

function AddUser() {

    const adduser = async () => {

        try {
            await addDoc(collection(fireDb, "User"), {
                name: "Bhavesh",
                email: "bhavesh@gmail.com",
                password: "123456",
            });

            console.log("Product Added Successfully");

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <div>
            <h2>Add User here </h2>

            <button onClick={adduser}>
                Add User
            </button>
        </div>
    );
}

export default AddUser;