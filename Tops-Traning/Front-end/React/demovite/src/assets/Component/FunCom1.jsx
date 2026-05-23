import React from "react";


// function FunCom1(){

//     return(
//         <div>
//             <h1>This is JSX Function in Vite</h1>
//         </div>
//     )
// }

// export default FunCom1;


// RFC
// export default function FunCom1() {
//   return (
//     <div>
//         <h1>This is RFC function</h1>
//     </div>
//   )
// }


// RAFCE
const FunCom1 = () => {


    let a = 10
    let b = 20

    console.log(a + b)
    
    
    let arr = [1,2,3,4,5] 

  return (
    <div>
        <h1>This is React Arrow Function Compontent Export(RAFCE) </h1>
        <h3>Sum : {a + b}</h3>
        <p>{arr[1]}</p>
    </div>
  )
}

export default FunCom1
