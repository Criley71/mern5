import { React, useState } from 'react'
import './Survey.css';
import axios from 'axios';


function Survey() {
    const [mealname, setmealn] = useState('');
    const [mealtime, setmealt] = useState('');
    const [insulintime, setinst] = useState('');
    const [insulindose, setinsd] = useState('');  
    const [carbcount, setcarbc] = useState('');
    const [formData, setFormData] = useState({
      mealName: "",
      mealTime: ""
      
    })
    // This is super inefficient but I literally can't find any examples online of how to do this
    // simpler so I'll keep researching it but if anyone has any tips lmk
    const mealnChange = event => {
      setmealn(event.target.value);
    };
    const mealtChange = event => {
      setmealt(event.target.value);
      };
    const instChange = event => {
      setinst(event.target.value);
      };
    const insdChange = event => {
      setinsd(event.target.value);
      }
    const carbcChange = event => {
      setcarbc(event.target.value);
    };
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
        setmealn("");
        setmealt("");
        setinst("");
        setinsd("");
        setcarbc("");
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
        <form>
            <h2>Meal Survey</h2> <br></br>

            <h3>Meal Name: </h3>
            <input type="text" value={mealname} onChange={mealnChange} id="meal_name" name="meal_name"/>

            <h3>Time of Meal: </h3>
            <input type="time" value={mealtime} onChange={mealtChange} name="meal_time"/>

            <h3>Time of Insulin Dosage: </h3>
            <input type="time" value={insulintime} onChange={instChange} name="ins_time"/>

            <h3>Insulin dosage: </h3>
            <input type="number" value={insulindose} onChange={insdChange}/>

            <h3>Carb count: </h3>
            <input type="number" value={carbcount} onChange={carbcChange}/>

            <br></br><button type = "submit" onClick={handleOnSubmit}>submit</button>
        </form>
      </div>
    </main>
  );
}

export default Survey