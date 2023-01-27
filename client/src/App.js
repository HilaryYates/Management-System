import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setage] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  return (
    <div className='App'>
      <div className='info'>
        <label>Name:</label>
        <input type='text' onChange={(evt) => setName(evt)} />
        <label>Age:</label>
        <input type='number' onChange={(evt) => setAge(evt)} />
        <label>Country:</label>
        <input type='text' onChange={(evt) => setCountry(evt)} />
        <label>Position:</label>
        <input type='text' onChange={(evt) => setPosition(evt)} />
        <label>Wage (year):</label>
        <input type='number' onChange={(evt) => setWage(evt)} />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
