import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [list, setList] = useState([])

  const handleClick = (event) => {

    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }

    console.log(newDot);
    setList((prev) => [...prev, newDot]);
  };

  return (
    <div id='page' onClick={handleClick}> 
    {JSON.stringify(list)}
      <span className='dot' />
    </div>
  )
}

export default App
