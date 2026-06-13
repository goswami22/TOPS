import React from 'react'

function Playlist({song}) {
    return (
    <div>
        {

            song.map(( item, index)=> (
                <ul key={index}>
                    <li>{item.songName}- {item.ArtistName}</li>
                </ul>
            ))


        }
    </div>
  )
}

export default Playlist
