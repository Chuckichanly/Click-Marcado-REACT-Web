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
    // setList();
  };

  return (
    <div id='page' onClick={handleClick}> 
      <span className='dot' />
    </div>
  )
}

export default App
