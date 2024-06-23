import './App.css'
import { useState } from 'react';

function App() {

  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const increaseValue = () => {
    // counter = counter+1;
    setCounter(counter+1);
  }

  const decreaseValue = () => {
    // counter = counter+1;
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={increaseValue}>Increase +</button> &nbsp;
      <button onClick={decreaseValue}>Descrease -</button>
    </>
  )
}

export default App
