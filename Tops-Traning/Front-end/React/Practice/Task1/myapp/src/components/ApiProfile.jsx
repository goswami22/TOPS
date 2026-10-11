import axios from "axios"
import { useEffect, useState } from "react"

const ApiProfile = () => {

    useEffect(()=>{
        fetchdata()
    },[])

    const [profile, setProfile] = useState([])

    const fetchdata =  async ()=> {
        try {
            const res = await axios.get('http://localhost:3000/profile')
            setProfile(res.data)
            console.log('profile Data' , res.data)
        } catch(err) {
            console.log("Api not Found", err)
        }
    }

    return(
        <div>

            <h1>Profile Api</h1>
            {profile.name}
        
        </div>
    )



}

export default ApiProfile