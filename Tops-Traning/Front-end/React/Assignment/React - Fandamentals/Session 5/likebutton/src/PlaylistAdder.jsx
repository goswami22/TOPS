import React, { useState } from 'react'

function PlaylistAdder() {

    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')
    const [playlist, setPlaylist] = useState([])

    const addSong = (e) => {
        e.preventDefault()


        const newsong = {
            songName: song,
            artistName: artist
        }

        setPlaylist([...playlist, newsong])

        setSong("")
        setArtist("")

    }


    return (
        <div>
            <form action="" onSubmit={addSong}>
                <input type="text" placeholder='Song name' required value={song} onChange={(e) => setSong(e.target.value)} />
                <input type="text" value={artist} placeholder='Artist name' required onChange={(e) => setArtist(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
            <hr />
            
                {
                    playlist.map((item, index) => (
                        <div key={index}>
                            <h3>{item.songName} - {item.artistName}</h3>
                        </div>
                    ))
                }
        </div>
    )
}

export default PlaylistAdder
