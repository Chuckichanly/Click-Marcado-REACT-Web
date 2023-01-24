import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='page'> 
      <span className='dot' />
    </div>
  )
}

export default App
