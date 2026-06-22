import React, { useState } from 'react'
import axios from 'axios'


function useApi(apiData) {
    
    const [data, setData] = useState([])


    const fetchData = async()=> {
        try {
            const res = await axios.get(apiData)
            setData(res.data) 
        } 
        catch(err) {
            console.log("Error ", err)
        }
    }


    return{data, fetchData}
}

export default useApi
