import React, { useEffect } from 'react'
import useCustomCount from './useCustomCount'
import useApi from './useApi'

function DataManager() {
  
    const {count, Increament,Decreament } = useCustomCount(1)
    // console.log(count)

    
    const {data, fetchData} = useApi('https://fakestoreapi.com/products')
    console.log(data)
    
    useEffect(()=> {
        fetchData()
    },[])

    return (
    <div>
      <h1>Count : {count}</h1>
        <button className='border-2 border-blue-700 p-2 me-2' onClick={Increament}>Increament</button>
        <button className='border-2 border-red-700 p-2' onClick={Decreament}>Decreament</button>

        {

            data.map((item, index)=> (
                <ul key={index}>
                    <li>{item.title}</li>
                    <li>{item.category}</li>
                </ul>
            ))

        }
    </div>
  )
}

export default DataManager
