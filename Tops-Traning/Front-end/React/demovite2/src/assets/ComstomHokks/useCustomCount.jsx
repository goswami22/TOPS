import React, { useState } from 'react'

function useCustomCount(num) {
  
    const [count, setCount] = useState( num)

    const Increament = () => {
        setCount(count + 1)
    }
    
    const Decreament = () => {
        setCount(count - 1)
    }

    return { count, Increament, Decreament }

}

export default useCustomCount
