import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 10; //This counter variable will be update but will not be reflect into UI. So, we need of a react hook.

  //declaration and initialization of react hook  
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("clicked", counter);
    if (counter != 20) {
      setCounter(counter + 1);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Interview Question

    /*
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    */
    // So here the function calls will be sent in batches.So, react will see them as the same operation and perform it only once.So, the counter will increase by only 1 count.
    //To increase it by four counts, use the callback which the setCounter accepts and increase it one by one.So, the first function will be called first, the callback will be executed and the next function call will be executed.
    /*
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    */

  }

  const removeValue = () => {
    // console.log("clicked", counter);
    if (counter != 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
