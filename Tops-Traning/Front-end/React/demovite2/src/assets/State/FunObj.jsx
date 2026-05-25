import React, { useState } from "react";
import ImageState from "./ImageState";


function FunObj(){

    const [data, setdata] = useState({
        name : 'Bhavesh',
        count : 0,
        isImage : true
    })

    // console.log(data)
    return(
        <div>
            // name 
            <h1>Name : {data.name}</h1> 
            <button onClick={()=> setdata({...data,name : 'Raj'})}>Change Name</button>
            <button onClick={()=> setdata({...data,name : 'Mohan'})}>Change Name</button>
            <button onClick={()=> setdata({...data,name :'Bhavesh'})}>Reset Name</button>
            <br />
            <br />
            <br />

            <h1>Count : {data.count}</h1>
            <button onClick={()=> setdata({...data, count:  data.count + 1})}>Increament</button>
            <button onClick={()=> setdata({...data, count: data.count - 1})}>Decreament</button>
            <button onClick={()=> setdata({...data, count : 0})}>Reset</button>
            <br />
            <br />
            <br />

             <button onClick={()=> setdata({...data, isImage: false})}>Hide</button>
             <button onClick={()=> setdata({...data, isImage: true})}>Show</button>
             <button onClick={()=> setdata({...data, isImage : !data.isImage})}>Toggle</button> 
             <br />  

            {
                (data.isImage) ? <ImageState/> : false
            }
        
        </div>
    )

}

export default FunObj;