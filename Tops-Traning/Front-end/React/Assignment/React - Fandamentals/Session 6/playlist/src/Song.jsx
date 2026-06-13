import React from 'react'
import Playlist from './Playlist'

function Song() {

    const songs = [
        {
            songName: 'Abc',
            ArtistName: 'John don'
        },
        {
            songName: 'ced',
            ArtistName: 'John don'
        }
    ]


    return (
        <div>

        <Playlist song={songs}/>

        </div>
    )
}

export default Song
