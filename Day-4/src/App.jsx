
import './App.css'
import { Button } from './components/Button'
import {Card} from './components/Card'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1);
  }
 

  return (
    <div>
      <Card className='tarun'>
        <h1>Trying to be Consistent in Learning</h1>
        <p>I'll learn this React Soon!</p>
      </Card>
      <Button handleClick = {handleClick}
      text={`Your count is ${count}`}
      
      />
    </div>
  )
}

export default App
