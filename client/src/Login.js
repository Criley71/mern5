import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginValidation'
import validation from './LoginValidation';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState("")
    const [passError, setPassError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const nav = useNavigate(); //nav the goat fr
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(false)
        setPassError(false)
        //setErrors(validation(values))
        axios.post('https://mern5-api.vercel.app/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    nav('/home')
                } if (result.data === "Incorrect Password") {
                    setPassError(true)
                } if (result.data === "No email associated with an account") {
                    setEmailError(true)
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <div className="header">
                <h2 className="text">Login</h2>
                <div className="underline"></div>
                <form onSubmit={handleSubmit} className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='from-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="input">
                        <label htmlFor='password'>
                            <img src={password_icon} alt="" />
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            className='from-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div >
                    <div className="submit-container">
                    <button type='submit' className='subbtn'>
                        Login
                    </button>
                    </div>
                </form>
                <Link to="/">
                    <button className='btn'>
                        Register
                    </button>
                </Link>
                <div>
                    {emailError ? 'Incorrect email' : ''}
                </div>
                <div>
                    {passError ? 'Incorrect Password' : ''}
                </div>
            </div>
        </div>
    )
}

export default Login