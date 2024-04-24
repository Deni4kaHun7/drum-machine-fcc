import { useState } from 'react'
import './App.css'
import soundsLibrary from "./Sounds"

function App() {
  const sounds = soundsLibrary;
  
  const soundsElements = sounds.map(soundElement => {
    return (
      <button key={soundElement.name} name={soundElement.name} onClick={playSound}>{soundElement.name}</button>
    )
  })

  function playSound(event){
    const buttonName = event.target.name;
    const sound = sounds.find(sound => sound.name === event.target.name)
    sound.path.play()
  }

  return (
    <div id="drum-machine">
      {soundsElements}
      <div id="display">
      </div>
    </div>
    
  )
}

export default App
