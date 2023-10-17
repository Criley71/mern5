import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const nav = useNavigate(); //nav the goat fr
    axios.defaults.withCredentials = true;
    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://mern5-api.vercel.app/register', {email, password})
        .then(result => {
            console.log(result)
            if(result.data == "Success"){

            }
        })
    }
    */

  return (
    <div>
        <h1>Login</h1>
    </div>
  )
}

export default Login