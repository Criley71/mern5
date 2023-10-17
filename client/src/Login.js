import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './LoginValidation'
import validation from './LoginValidation';
function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const handleInput = (event) => {
        setValues(prev =>({...prev, [event.target.name]: [event.target.value]}))
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const nav = useNavigate(); //nav the goat fr
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values))
        axios.post('https://mern5-api.vercel.app/login', {values})
        .then(result => {
            console.log(result)
            if(result.data == "Success"){
                nav('/home')
            }
        })
        .catch(err => console.log(err))
    }
    

    return(
        <div className = "b-flex justify-content-center align-items-center bg-blue">
            <div className = "bg-white p-3 rounded w-25">
			<h2>Sign-in</h2>
                <form action = "" onSubmit = {handleSubmit}>
                    <div className = "mb-3">
                        <label htmlFor = "email">Email<strong/></label>
                        <input type = "email" placeholder = "Enter Email" name='email'
                        onChange={handleInput} className = 'from-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}

                    </div>
                    <div className = "mb-3">
                        <label htmlFor = "password">Password<strong/></label>
                        <input type = "password" placeholder = "Enter Password" name ='password'
                        onChange={handleInput} className = 'from-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type = 'submit' className = "btn btn-success">Login</button>
                    <Link to = "/Signup" className = "btn btn-default border">Signup</Link>
                </form>
            </div>
        </div>
    )
}

export default Login