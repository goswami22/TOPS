import axios from 'axios'
import React, { useState } from 'react'

function UseCustomH(api) {

    const [view, singleView] = useState([])

    const GetData = async(id)=>{
        try {
            const res = await axios.get(`${api}/${id}`)
            singleView(res.data)
        } catch (error) {
            console.log('Api Not Found ', error)
        }
    }

    return{view, GetData}

}

export default UseCustomH
