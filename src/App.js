import { React ,useState} from "react";
import "./App.css";
function App() {
  const [Number , setNumber] = useState(0)
  return (
    <div>
      <div className="title">
        <h1>Counter App</h1>
        <h5>Current number is:{Number}</h5>
      </div>
      <div className="buttons">
        <button onClick={() => setNumber(Number + 1)}>Increment</button>
        <button onClick={() => setNumber(Number - 1)}>Decrement</button>
        <button onClick={() => setNumber(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
