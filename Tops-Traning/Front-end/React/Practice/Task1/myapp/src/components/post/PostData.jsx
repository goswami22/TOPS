import axios from "axios"
import { useState } from "react"

const PostData = () => {

    // const redirect = useNavigate()
    const [data, setdata] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        address: ''
    })

    const getData = (e) => {
        setdata({
            ...data,
            // id: new Date.getTime().tostring(),
            [e.target.name]: e.target.value
        });
    };


    const submitData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/person', data)
            setdata({
                name: '',
                age: '',
                phone: '',
                email: '',
                address: ''
            })
            alert('Data Send Successfully')
            // redirect('/PostDataRecevi')
        } catch (error) {
            console.log("Api Not Found", error)
        }
    }


    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <h1 className="mb-5 text-center">Post Data</h1>
                    <div className="col-7 mx-auto">
                        <form action="" onSubmit={submitData}>
                            <div className="mb-3">
                                <label className="mb-2" htmlFor="name">Name</label><br />
                                <input type="text" name="name" value={data.name} onChange={getData} className="form-control" placeholder="Enter Name" required />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2" htmlFor="age">Age</label><br />
                                <input type="text" name="age" value={data.age} onChange={getData} className="form-control"  placeholder="Enter age" required />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2" htmlFor="phone">Phone</label><br />
                                <input type="tel" name="phone" value={data.phone} onChange={getData} className="form-control"  placeholder="Enter phone" required />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2" htmlFor="email">Email</label><br />
                                <input type="email" name="email" value={data.email} onChange={getData} className="form-control"  placeholder="Enter email" required />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2" htmlFor="address">Address</label><br />
                                <textarea name="address" value={data.address} onChange={getData} rows={5} className="form-control" placeholder="Enter Address" required></textarea>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary">Create Data</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PostData