import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log(123)
  };

  return (
    <div id='page' onClick={handleClick}> 
      <span className='dot' />
    </div>
  )
}

export default App
