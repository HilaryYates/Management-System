import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(console.log("Success"));
  };

  return (
    <div className='App'>
      <div className='info'>
        <label>Name:</label>
        <input type='text' onChange={(evt) => setName(evt.target.value)} />
        <label>Age:</label>
        <input type='number' onChange={(evt) => setAge(evt.target.value)} />
        <label>Country:</label>
        <input type='text' onChange={(evt) => setCountry(evt.target.value)} />
        <label>Position:</label>
        <input type='text' onChange={(evt) => setPosition(evt.target.value)} />
        <label>Wage (year):</label>
        <input type='number' onChange={(evt) => setWage(evt.target.value)} />
        <button onClick={addEmployee}>Add Employee</button>
        <button>Show Employees</button>
      </div>
    </div>
  );
}

export default App;
