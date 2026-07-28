import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'


function UseCustomDelete(api) {

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`${api}/${id}`) 
            toast.success('Data Deleted SuccessFullly')

        } catch (error) {
            toast.error('API not Found', error)
        }
    }

    return {deleteData}

}

export default UseCustomDelete
