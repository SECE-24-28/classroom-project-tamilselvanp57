import React, { useContext } from 'react'
import  DataContext  from './DataContext'
export const Two = () => {
    const {name,count}=useContext(DataContext)
  return (
    <>
    <h1>Hello {name} and the count is {count}</h1>
    </>
  )
}
export default Two