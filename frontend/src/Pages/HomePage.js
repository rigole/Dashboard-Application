import React, { useEffect, useState } from 'react';
import axios from "axios";


const HomePage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className='table border shadow'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Second</th>
                            <th scope="col">Third</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>(
                                <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <th>{user.name}</th>
                                <th>{user.username}</th>
                                <th>{user.email}</th>
                            </tr>
                            ))
                        }

                       
                    </tbody>                
                </table>
            </div>
        </div>
    )
}

export default HomePage