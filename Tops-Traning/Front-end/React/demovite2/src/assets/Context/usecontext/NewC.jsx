import React, { useContext } from "react";
import { data } from "./NewA";


function NewC(){

    const {name, setname, form, setform} = useContext(data)
    // const {form, setform} = useContext(data)

    return (
        <div>
        <h1>This is New C</h1>


        <h1>C Name : {name}</h1>

        <h1>form Name : {form.fname}</h1>
        <h1>Count : {form.count}</h1>
        <button onClick={()=> setform({...form,count: form.count + 1})}>Increment</button>
        <button onClick={()=> setform({...form, count: --form.count})}>Decrement</button>
        <button onClick={()=> setform({...form, count: 0})}>Reset Count</button>



        </div>

    )
}

export default NewC;