import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function UseCustompost(api, initialData, redictPath) {

    const redirect = useNavigate()

    const [apiData, setApi] = useState(initialData)  

    const getapiData = (e)=> {
        setApi({
            ...apiData,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }


    const submitData = async (e)=> {
        e.preventDefault();

        try {
            const res = await axios.post(api, apiData)
            setApi(initialData)
            redirect(redictPath)
            toast.success('Data Successfully added')
            
        } catch (error) {
            toast.error('Api Not Found')
        }
    } 

    return {apiData,getapiData,submitData}
}

export default UseCustompost
