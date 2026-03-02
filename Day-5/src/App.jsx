
import './App.css'
import {Card} from './components/Card'
import { useState } from 'react';

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync karwadugha
  const [name, setName] = useState('');
  return (
    <div>
        <Card name={name} setName={setName}/>
        <p>I am inside Parent Component and Value is: { name}</p>
    </div>
  )
}

export default App
