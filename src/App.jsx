import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    console.log(event)
  };

  return (
    <div id='page' onClick={handleClick}> 
      <span className='dot' />
    </div>
  )
}

export default App
