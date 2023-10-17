import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './LoginValidation'
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const nav = useNavigate(); //nav the goat fr
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://mern5-api.vercel.app/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data == "Success"){
                nav('/home')
            }
        })
        .catch(err => console.log(err))
    }
    

  return (
    <div>
        <div className='login'>
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
                        className='email'
                        onChange={e => setEmail(e.target.value)}
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
                        name='email'
                        className='email'
                        onChange={e => setPassword(e.target.value)}
                    /> 
                </div>
                <button type='submit' className='subbtn'>
                    Login
                </button>
            </form>
            <Link to="/register">
                    <button className='btn'>
                        Register
                    </button>
                </Link>
        </div>
    </div>
  )
}

export default Login