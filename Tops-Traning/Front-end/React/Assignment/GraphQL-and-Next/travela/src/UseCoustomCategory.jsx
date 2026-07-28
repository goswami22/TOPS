import axios from 'axios'
import React, { useState } from 'react'

function UseCoustomCategory(api) {
    
    const [dataCategory, SetDataCategory] = useState([])

    const fetchdata = async (category = '') => {
        try {
            const res = await axios.get(`${api}?${category}`)
            SetDataCategory(res.data)
            
        } catch (error) {
            console.log("API Not Found ", error)
        }
    }

    return {dataCategory, fetchdata}

}

export default UseCoustomCategory
