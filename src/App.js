import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [heartRate, setHeartRate]=useState("")
  const calculate = (e) => {
    e.preventDefault()
    let upper = (220 - age) * 0.85;
    let lower = (220 - age) * 0.65;
    setHeartRate(`${lower.toFixed(0)}-${upper.toFixed(0)}`)
  }
  return (
    <div class="container">
      <h3>Heart rate limits calculator</h3>

      <form onSubmit={calculate}>
        <div class="form-group">
          <label>Age</label>
          <input
            type="text"
            class="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)} required
          />
        </div>
        <div class="form-group">
          <label>Heart rate limits</label>
          <input type="text" class="form-control" value={heartRate} readOnly/>
        </div>
        <button type="submit" class="btn btn-primary">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default App;
