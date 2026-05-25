// // State : it's varibale 
// State : we can change data 
// State : Same File use
// Function :  react 16.8 version 
// Hooks : useState()
// const [State,setState] = useState(value)
// hooks : Define before Return 



import React, { useState } from "react";
import ImageState from "./ImageState";


function FunState() {

    const [name, setName] = useState('Arav')
    const [count, setCount] = useState(0)
    const [isImage, setImage] = useState(true)

    return (
        <div>
            <br />
            <br />
            <br />
            <h1>This is Function State</h1>
            
            <h1>Name: {name}</h1>
            <button onClick={()=> setName('Bhavesh')}>Change Name</button>
            <button onClick={()=> setName('Keval')}>Chage Name</button>
            <br />
            <br />
            <br />

            <h1>Count : {count}</h1>
            <button onClick={()=> setCount(count + 1)}>Incerease count</button>
            <button onClick={()=> setCount(count - 1)}>Decrease Count</button>
            <button onClick={()=> setCount(0)}>Reset</button>

            <br />
            <br />
            <br />

            <button onClick={()=> setImage(false)}>Hide</button>
            <button onClick={()=> setImage(true)}>Show</button>
            <button onClick={()=> setImage(!isImage)}>Toggle</button>


            <br />


            {

                (isImage)? <ImageState/> : false

            }





        </div>
    )
}

export default FunState;