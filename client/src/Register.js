import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
import './Login.css'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false)
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        const navigate = useNavigate();
        e.preventDefault()
        axios.post('https://mern5-api.vercel.app/register', { name, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
        navigate('/login')
    }
    return (
        <>
            <div className='container'>
                <div className="header">
                    <h1 className="text">Register</h1>
                </div>
                <div className="underline"></div>

                <form onSubmit={handleSubmit} className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type='text'
                            autoComplete='off'
                            placeholder='Enter Name'
                            name='name'
                            className="text-box"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <br />
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            autoComplete="off"
                            name="email"
                            className="text-box"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            className='text-box'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="submit-container">
                        
                        <button type='submit' className='submit' disabled={!name || !email || !password}>
                            Sign Up
                        </button>
                        
                    </div>
                    <br />
                    <p>Already have an Account?</p>
                    <div className="submit-container">
                        
                        <br></br>
                        <Link to="/login">
                            <button className='submit' >
                                Login
                            </button>
                        </Link>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Register