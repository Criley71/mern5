import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
import './Login.css'

function Survey() {
  const [email, setEmail] = useState([]);


  const [mealName, setMealName] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [insulinTime, setInsulinTime] = useState('');
  const [insulinDose, setInsulinDose] = useState('');
  const [carbCount, setCarbCount] = useState('');
  const [formData, setFormData] = useState = ('');
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://mern5-api.vercel.app/survey', { email, mealName, mealTime, insulinTime, insulinDose, carbCount })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input">
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
        <div className="input">
          <label htmlFor="mealName">
            <strong>Name of Meal</strong>
          </label>
          <input
            type='text'
            placeholder='Enter Name of Meal'
            autoComplete="off"
            name="mealName"
            className="text-box"
            onChange={(e) => setMealName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="mealTime">
            <strong>Time of Meal</strong>
          </label>
          <input
            type='text'
            placeholder='Enter Time of Meal'
            autoComplete="off"
            name="mealTime"
            className="text-box"
            onChange={(e) => setMealTime(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="insulinTime">
            <strong>Time of Insulin</strong>
          </label>
          <input
            type='text'
            placeholder='Time of Insulin'
            autoComplete="off"
            name="insulinTime"
            className="text-box"
            onChange={(e) => setInsulinTime(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="insulinDose">
            <strong>Insulin Dosage</strong>
          </label>
          <input
            type='text'
            placeholder='Insulin Dose'
            autoComplete="off"
            name="insulinDose"
            className="text-box"
            onChange={(e) => setInsulinDose(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="carbCount">
            <strong>Amount of Carbs</strong>
          </label>
          <input
            type='text'
            placeholder='Carb Count'
            autoComplete="off"
            name="carbCount"
            className="text-box"
            onChange={(e) => setCarbCount(e.target.value)}
          />
        </div>
        <button type='submit' disabled={!email || !mealName || !mealTime || !insulinTime || !insulinDose || !carbCount}>
          submit
        </button>
      </form>
    </div>
  )
}

export default Survey

/*
function Survey() {
  const [email, setEmail] = useState('')
  const [mealname, setMealName] = useState('');
  const [mealtime, setMealTime] = useState('');
  const [insulintime, setInsulinTime] = useState('');
  const [insulindose, setInsulinDose] = useState('');
  const [carbcount, setCarbCount] = useState('');

  const [form, setForm] = useState({
    mealName: '',
    mealTime: '',
    insulinTime: '',
    insulinDose: '',
    carbCount: ''
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const testSubmit = (e) => {
    e.preventDefault()
    setForm({mealName: 'mealname',  mealTime: 'mealtime', insulinTime: 'insulintime', insulinDose: 'insulindose', carbCount: 'carbcount'})
    axios.post('https://mern5-api.vercel.app/survey', {email, form})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setForm(mealname, mealtime, insulintime, insulindose, carbcount)
    axios.post('https://mern5-api.vercel.app/survey', { email, form })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  // This is super inefficient but I literally can't find any examples online of how to do this
  // simpler so I'll keep researching it but if anyone has any tips lmk
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/register', {
      method: "post",
      body: JSON.stringify({ mealname, mealtime, insulintime, insulindose, carbcount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setMealName("");
      setMealTime("");
      setInsulinTime("");
      setInsulinDose("");
      setCarbCount("");
    }
  }
  /*
    console.log(mealname);
    console.log(mealtime);
    console.log(insulintime);
    console.log(Number(insulindose));
    console.log(Number(carbcount));
  
  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Meal Survey</h2> <br></br>

          <h3>email</h3>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" />

          <h3>Meal Name: </h3>
          <input type="text" value={mealname} onChange={(e) => setMealName(e.target.value)} id="meal_name" />

          <h3>Time of Meal: </h3>
          <input type="time" value={mealtime} onChange={(e) => setMealTime(e.target.value)} name="meal_time" />

          <h3>Time of Insulin Dosage: </h3>
          <input type="time" value={insulintime} onChange={(e) => setInsulinTime(e.target.value)} name="ins_time" />

          <h3>Insulin dosage: </h3>
          <input type="number" value={insulindose} onChange={(e) => setInsulinDose(e.target.value)} />

          <h3>Carb count: </h3>
          <input type="number" value={carbcount} onChange={(e) => setCarbCount(e.target.value)} />

          <br></br><button type="submit">submit</button>
        </form>
        <br></br><button type="submit" onSubmit={testSubmit}>submit Test</button>
      </div>
    </main>
  );
}

export default Survey
*/