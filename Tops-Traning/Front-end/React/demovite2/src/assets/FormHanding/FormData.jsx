import React, { useState } from "react";


function FormData() {

    const [name, setname] = useState(" ")
    const [email,setemail] = useState(" ")
    const [password,setpassword] = useState(" ")

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name"  className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e)=> setname(e.target.value)} id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email"  className="form-label">email</label>
                            <input type="email" className="form-control" value={email} onChange={(e)=> setemail(e.target.value)} id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e)=> setpassword(e.target.value)} id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default FormData;