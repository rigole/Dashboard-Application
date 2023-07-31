import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: ""
    })
    const {name, username, email} = user

    let navigate = useNavigate()

    const inputChange = (e) => {
        setUsers({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 boder rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
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

export default AddUser