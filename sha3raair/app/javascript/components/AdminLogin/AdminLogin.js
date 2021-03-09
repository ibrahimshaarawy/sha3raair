import React, { useState } from 'react'
import { useHistory } from "react-router"

const AdminLogin = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    let history = useHistory()

    const handleSubmit = async e => {
        history.push('/adminstrator/planes')
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Username</label>
                <input type='text' placeholder='Username...' onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type='text' placeholder='Password...' onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <button type="submit" className='btn'>Submit</button>
            </div>
        </form>
        </div>
    )
}

export default AdminLogin
