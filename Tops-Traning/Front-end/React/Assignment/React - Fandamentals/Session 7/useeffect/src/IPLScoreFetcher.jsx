import React, { useEffect, useState } from 'react'
// import React, { useState } from 'react'

function IPLScoreFetcher() {
  
    const [user, setUser] = useState([])

    useEffect(()=>{

            fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'GET'
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setUser(data[0].title)
            })


    },[]) 
    


    return (
    <div>
      <h2>IpL mathch heding</h2>
        
        {/* <button>Get Data</button> */}



      {
          <h3>Match heading: {user}</h3>

        // (user.length > 0) && (
        //     // <h3>{user[0].title}</h3>
        // )

      }
    </div>
  )
}

export default IPLScoreFetcher
