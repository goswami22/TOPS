import React, { Component } from "react";


// class ClassComponent extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>This is Class Component</h1>
//             </div>
//         )
//     }
// }

// export default ClassComponent;

// RCE 
// class classComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is Class RCE   Component</h1>
//       </div>
//     )
//   }
// }

// export default classComponent

// RCC
// import React, { Component } from 'react'

 class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is Class RCC   Component</h1>
      </div>
    )
  }
}
export default ClassComponent