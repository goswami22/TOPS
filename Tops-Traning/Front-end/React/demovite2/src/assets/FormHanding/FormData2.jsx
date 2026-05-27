import React, { useState } from 'react'

export default function FormData2() {
    
    // const [name, setname] = useState('')
    // const [surname, setsurname] = useState('')

    const [form , setform] = useState({
        name : "",
        surname : ""
    })

    const getdata = (e) =>{
        setform({
            ...form,
            [e.target.name]: e.target.value 
        })
    }

    console.log(form)
    return (
    <div>
        {/* <form action="">
            <label htmlFor="name">name: </label>
            <input type="name" value={name}  onChange={(e)=> setname(e.target.value)} id="name" />
            <br />    
            <br />    
            <label htmlFor="surname">surname: </label>
            <input type="surname"  value={surname} onChange={(e)=> setsurname(e.target.value)} id="surname" />
            <br />    
            <br />    
            <button type="submit">Send</button>    
        </form>         */}

        {/* <form action="">
            <label htmlFor="name">name: </label>
            <input type="text" value={form.name} onChange={(e)=> setform({...form, name: e.target.value})} id="name" />
            <br />    
            <br />    
            <label htmlFor="surname">surname: </label>
            <input type="text" value={form.surname} onChange={(e)=> setform({...form, surname: e.target.value})}  id="surname" />
            <br />    
            <br />    
            <button type="submit">Send</button>    
        </form> */}


        <form action="">
            <label htmlFor="name">name: </label>
            <input type="text" name='name' value={form.name} onChange={getdata} id="name" />
            <br />    
            <br />    
            <label htmlFor="surname">surname: </label>
            <input type="text" name='surname' value={form.surname} onChange={getdata}  id="surname" />
            <br />    
            <br />    
            <button type="submit">Send</button>    
        </form>
    </div>
  )
}
