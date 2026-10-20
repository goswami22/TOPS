import { useState } from "react"
import Collage from "./Collage"
import Student from "./Student"
import Test1 from "./test1"

const MainProp = () => {
    let user = {
        name : 'Bhavesh',
        age : 25
    }
    let user2 = {
        name : 'Raj',
        age : 30
    }
    let user3 = {
        name : 'Mohan',
        age : 20
    }
    let collageData = ['IIT', 'MS', 'DU'] 
    const [student, setStudent]= useState([])

    return(
        <div>
            <h1>Student Name: </h1>
            {student && <Student Sname={student}/> }
            <button onClick={()=> setStudent('Bhavesh')}>Change Name</button>

            {/* <Test1 name={'Bhavesh'} age={25}/> */}
            <Test1 userinfo={user}/>
            <Test1 userinfo={user2}/>
            <Test1 userinfo={user3}/>
            <Collage cname={collageData[0]}/>
        </div>
    )
}

export default MainProp