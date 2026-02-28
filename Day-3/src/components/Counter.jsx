
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);
  //  here count is a variable and setCount is a function which will update the value of count variable and we have initialised the count variable with 0 using useState hook.
  return (
    <div className="counter-container">
      <p id="para"> You have Clicked {count} times</p>
      <button id='button' onClick={()=> {setCount(count+1)}}>Increase</button>

      <button id='button' onClick={()=> {setCount(count-1)}}>Decrease</button>

      <button id='button'onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  ) 
}

export default Counter