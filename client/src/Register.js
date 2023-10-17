import { React, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import axios from 'axios'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://mern5-api.vercel.app/register', { name, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='App'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                        type='email'
                        placeholder='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type='password'
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type='submit' className='btn'>
                        Register
                    </button>
                    <br />

                </form>
                <Link to="/login">
                    <button className='btn'>
                        Login
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Register