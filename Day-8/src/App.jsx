
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  // first = code to run on component mount -> side-effect function
  // second = code to run on component unmount -> cleanup function
  // third = dependency array, if empty it runs only on mount and unmount, if it has variables it runs when those variables change -> dependency array

  // variation 1: runs on every render

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  // useEffect(() => {
  //   alert('I will render on every render');
  // })

  // variation 2: runs only on mount and unmount

  // useEffect(() => {
  //   alert('I will render only on first render');
  // }, [])


  // variation 3: runs when the variable in the dependency array changes

  // useEffect(()=>{
  //   alert('I will render only when count changes');
  // })

  // variation 4: runs when the variable in the dependency array changes and also on first render
  
  // useEffect(() => {
  //   alert('I will render on first render and when count or total changes');
  // }, [count, total])

  // variation 5: cleanup function
  
  useEffect(() => {
    alert("count is updated")
    return() =>{
      alert("count is unmounted from UI");
    }
  },[count])

  function handleClick() {
    setCount(count + 1);
    // setTotal(total + 1);
  }

  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      <br />
      Count is {count}
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is {total}
    </div>
  );
}

export default App
