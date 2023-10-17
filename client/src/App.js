import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './Login'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://mern5-api.vercel.app/register', {name, email, password})
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
          <a to="/login">
          <button className='btn'>
            Login
          </button>
          </a>
      </form>
      
    </div>
    </>
  )
}

export default App
