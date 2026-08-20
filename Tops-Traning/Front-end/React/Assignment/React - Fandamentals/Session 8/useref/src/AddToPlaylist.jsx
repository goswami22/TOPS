import React, { useEffect, useRef, useState } from 'react'

function AddToPlaylist() {

    useEffect(()=>{
      inputRef.current.focus()
    },[])

    const [song, setSong] = useState('')
    const [playlist, setPlaylist] = useState([])

    const inputRef = useRef()

    const addsonglist = (e) => {
        e.preventDefault()

        setPlaylist([...playlist, song])

        setSong("")
    }

  return (
    <div>
      <form action="" onSubmit={addsonglist}>
        <input type="text" placeholder='Song Name' value={song} ref={inputRef} onChange={(e)=> setSong(e.target.value)}/>
        &nbsp;&nbsp;&nbsp;
        <button type='submit'>Add</button>
        {

            playlist.map((item,index)=>(
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            ))


        }
      </form>
    </div>
  )
}

export default AddToPlaylist
