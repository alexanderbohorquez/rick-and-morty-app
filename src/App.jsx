import { useState } from 'react'
import './App.css'
import Random from './components/Random'
import logo from '/public/Rick-And-Morty-Logo.png'
import video from '/public/videoplayback.mp4'




function App() {
  
  // const [count, setCount] = useState (0)

  return (

    <div className='body'>

      
      <Random ></Random>
      <footer className="footer">
        <p className="footer__text">Creado por Alexander Bohorquez  </p>
      </footer>
    </div>
  )
}

export default App
