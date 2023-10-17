import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginValidation'
import validation from './LoginValidation';
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
                }if (result.data === "Incorrect Password") {
                    setPassError(true)
                }if (result.data === "No email associated with an account") {
                    setEmailError(true)
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
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
                    <div>
                        <label htmlFor='password'>
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

                    </div>
                    <button type='submit' className='subbtn'>
                        Login
                    </button>
                </form>
                <Link to="/">
                    <button className='btn'>
                        Register
                    </button>
                </Link>
                <div>
                    {emailError ?  'Incorrect email' : ''}
                </div>
                <div>
                    {passError ? 'Incorrect Password' : ''}
                </div>
            </div>
        </div>
    )
}

export default Login