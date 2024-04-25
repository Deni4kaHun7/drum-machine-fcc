import { useState, useEffect } from 'react'
import './App.css'
import soundsLibrary from "./Sounds"

function App() {
  const sounds = soundsLibrary;
  const [displayText, setDisplayText] = useState("")
  
  const soundsElements = sounds.map(soundElement => {
    return (
      <button className="drum-pad" key={soundElement.name} id={soundElement.name} onClick={() => playSound(soundElement.key)}>
        <audio className="clip" id={soundElement.key} src={soundElement.path}></audio>
        {soundElement.key}
        </button>
    )
  })

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase())
    })
  }, [])

  function playSound(audioElementId){
    const audioElement = document.getElementById(audioElementId);
    setDisplayText(audioElementId)
    audioElement.play()
  }

  return (
    <div id="drum-machine">
      {soundsElements}
      <div id="display">
        {displayText}
      </div>
    </div>
    
  )
}

export default App
