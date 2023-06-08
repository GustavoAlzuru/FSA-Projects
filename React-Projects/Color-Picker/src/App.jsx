import { useState } from 'react'
import './App.css'
import Color from './Components/Color'
import Navigation from './Components/Navigation'

function App() {
  const [color, setColor] = useState('')

  return (
    <>
      <Navigation color={color}/>
      <div style={{display: 'flex', marginTop: '50px', width: '100%', justifyContent: 'space-around'}}>
        <Color color={'blue'} setColor={setColor}/>
        <Color color={'red'} setColor={setColor}/>
        <Color color={'green'} setColor={setColor}/>
      </div>
    </>
  )
}

export default App
