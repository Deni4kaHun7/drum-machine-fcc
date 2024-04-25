import { useState, useEffect } from 'react'
import './App.css'
import soundsLibrary from "./Sounds"

function App() {
  const sounds = soundsLibrary;
  
  const soundsElements = sounds.map(soundElement => {
    return (
      <button className="drum-pad" key={soundElement.name} id={soundElement.name} onClick={playSound}>
        <audio className="clip" id={soundElement.key} src={soundElement.path}></audio>
        {soundElement.key}
        </button>
    )
  })

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const pressedKey = event.key.toUpperCase();
      const sound = sounds.find(sound => sound.key === pressedKey);
      
      if (sound){
        const buttonElement = document.querySelector(`#${sound.name}`);
        const audioElement = buttonElement.querySelector('.clip');
        const displayElement = document.querySelector("#display");
        displayElement.innerText = sound.key;
        audioElement.play();
      }else {
        return;
      }
    })
  }, [])

  function playSound(event){
    const audioElement = event.target.querySelector('.clip');
    const displayElement = document.querySelector("#display");
    displayElement.innerText = audioElement.id;
    audioElement.play()
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
