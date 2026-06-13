// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'

function MovieSuggestions() {

    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    const featchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setMovie(data)
                setLoading(false)
            })

    }
    // },[])

    return (
        <div>
            <button onClick={featchData}>Get Data</button>
            {
                loading ? (
                    <h3>loading...</h3>
                )
                    :
                    (
                        movie.map((item) => (
                            <ul key={item.id}>
                                <li>{item.name}</li>
                            </ul>
                        ))
                    )
            }
        </div>
    )
}

export default MovieSuggestions
