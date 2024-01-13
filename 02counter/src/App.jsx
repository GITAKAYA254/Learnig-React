import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  //let counter = 15;
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Learning React with Hitesh</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={increment}>Add value</button>{" "}
      <button onClick={decrement}>Remove Value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
