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

  const handleUndo = (event) => {
    event.stopPropagation();
    console.log('undo');

    setList((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    })
  }

  return (
    <div id='page' onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      {list.map((item) => (
        <span className='dot' style={{left: item.clientX, top: item.clientY}}/>
      ))}
    </div>
  )
}

export default App
