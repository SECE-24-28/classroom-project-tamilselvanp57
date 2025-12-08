import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let demo=(name) =>
 {
  console.log("vanakkam"+name);
 }
  return (
    <>
       {/* anonymous function */}
      <button onClick={() => demo("Tamil")}>Click me</button> //arrow function
    </>
  )
}

export default App
