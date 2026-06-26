import axios from 'axios'
import React, { useState } from 'react'

function UseCustomHooks(apiData) {

    const [api, setApi] = useState([])

    const fetchApi = async () => {
        try {
            const res = await axios.get(apiData)
            setApi(res.data)
        } catch (error) {
            console.log('API Not found', error)
        }
    }


    return{api, fetchApi}
}


export default UseCustomHooks
