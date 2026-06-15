import React, {  useRef, useState } from 'react'



function SearchBar() {

    const [message , setMessage] = useState('')
    const [name , setName] = useState('')

    // const inputRef = useRef()
    const messageRef = useRef()

    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])


    const formsubmit = (e) => {
        e.preventDefault()

        // console.log(inputRef.current.value)
        console.log(`Name: ${name} - Feedback ${message}`)
        // inputRef.current.value = ""
        setName('')
        setMessage('')
        messageRef.current.focus()
    }

    return (
        <div>
            <form action="" onSubmit={formsubmit}>

                <input type="text" placeholder='name' value={name}  onChange={(e)=> setName(e.target.value)}/>
                <input type="text" placeholder='message' value={message} ref={messageRef} onChange={(e)=> setMessage(e.target.value)}/>
                &nbsp;&nbsp;
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default SearchBar
