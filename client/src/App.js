import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

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
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
