import React from 'react'
import './App.css'
import './index.css'
import Student from './Student'
export default function App() { // using props we can pass data from one component to another component as parameters
  return(
    <>
    <h1>Student Details</h1>
        <Student title={"Student List"}
        dep={"CSE"}/>
        <Student title={"Student List"}/>
    </>
  )
}


