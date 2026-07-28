import axios from 'axios'
import React, { useState } from 'react'

function UseCustom(dataapi) {

    const [api, setApi] = useState([])


    const fetchApi = async()=>{
        try {
            const res = await axios.get(dataapi)
        } catch (error) {
            console.log(error)
        }
    }


    return {api, fetchApi}
}

export default UseCustom
