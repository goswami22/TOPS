import { useEffect, useState } from "react"
import axios from 'axios'


export default function Apifun(){

    useEffect(()=>{
        fetchData()
    },[])
    
    const [postApi, setPostApi] = useState()

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/posts')
            console.log('Post Api', res.data)
            setPostApi(res.data)
        } catch (error) {
                console.log('Api not found' , error)
        }
    } 
    
    
    return(
        <div>
            <h1>Post Api</h1>

            {
               postApi && postApi.map((data, index)=>{
                    return(
                        <ul key={index}>
                            <li>{data.title}</li>
                            <li>{data.author}</li>
                        </ul>
                    )
                })
            }


        </div>
    )
}