import React, { useContext } from 'react'
import DataContext from './DataContext'
export const One = () => {
    const {name}=useContext(DataContext)
  return (
    <div>
        <h1>hai {name}</h1>
    </div>
  )
}

export default One