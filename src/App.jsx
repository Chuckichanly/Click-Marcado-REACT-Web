import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [undone, setUndone] = useState([])

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

    if(list.length === 0){
      alert("Não é possivel desfazer mais ações")
      return;
    }

    const lastItem = list[list.length - 1];
    setUndone((prev) => [...prev, lastItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    });
  }
  
  const handleRedo = (event) => {
    event.stopPropagation();
    console.log('redo')

    if(undone.length === 0){
      alert("Não é possivel refazer mais ações")
      return;
    }
    
    const recoveredDot = undone[undone.length -1];
    setUndone((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    });
    setList((prev) => [...prev, recoveredDot]);

  }

  return (
    <div id='page' onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {list.map((item) => (
        <span className='dot' style={{left: item.clientX, top: item.clientY}}/>
      ))}
    </div>
  )
}

export default App
