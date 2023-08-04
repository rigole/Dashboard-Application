import React, {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })
    const {name, username, email} = user

    let navigate = useNavigate()
    const {id} = useParams()

    const inputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")

    }
    
    useEffect(() =>{
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 boder rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                        </div>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={(e) => inputChange(e)}
                        />

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">username</label>
                        </div>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={(e) => inputChange(e)}
                        />

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">email</label>
                        </div>
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => inputChange(e)}
                        />
                        <button type="submit" className="btn btn-outline-primary m-4">Add a student</button>
                        <Link type="submit" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                   
                </div>
              
            </div>
        </div>
    )
}

export default EditUser