import { React, useState } from 'react'
import './Survey.css';
import axios from 'axios';


function Survey() {
  const [email, setEmail] = useState('')
  const [mealname, setMealName] = useState('');
  const [mealtime, setMealTime] = useState('');
  const [insulintime, setInsulinTime] = useState('');
  const [insulindose, setInsulinDose] = useState('');
  const [carbcount, setCarbCount] = useState('');
  const initialForm = {
    email: '',
    mealName: '',
    mealTime: 0,
    insulinTime: 0,
    insulinDose: 0,
    carbCount: 0
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://mern5-api.vercel.app/survey/:_id', { email, form })
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
          <input type ="text" value={email} onChange={handleChange} id="email" name="email" />

          <h3>Meal Name: </h3>
          <input type="text" value={mealName} onChange={handleChange} id="meal_name" name="meal_name" />

          <h3>Time of Meal: </h3>
          <input type="time" value={mealtime} onChange={handleChange} name="meal_time" />

          <h3>Time of Insulin Dosage: </h3>
          <input type="time" value={insulintime} onChange={handleChange} name="ins_time" />

          <h3>Insulin dosage: </h3>
          <input type="number" value={insulindose} onChange={handleChange} />

          <h3>Carb count: </h3>
          <input type="number" value={carbcount} onChange={handleChange} />

          <br></br><button type="submit">submit</button>
        </form>
      </div>
    </main>
  );
}

export default Survey