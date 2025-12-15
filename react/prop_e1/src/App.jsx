import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import { Body } from './Body';
import { Footer } from './Footer.jsx';
import Search from './Search.jsx';

function App() 
{
      const [list,setList] =useState([
        {id:1,sname:"Vinoth",fee:true},
        {id:2,sname:"Shiva",fee:false},
        {id:3,sname:"Harish",fee:true}
      ]);

      const handleDelete=(id)=>
      {
      const newList=list.filter((ls)=>ls.id!=id)
      setList(newList)
      }
      const handleCheck=(id)=>
      {
         const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
         setList(newList)
      }
      const handleSearch=(query)=>
      {
        const newList=list.filter((ls)=>
          ls.sname.toLowerCase().includes(query.toLowerCase())
        );
        setList(newList);
      }
  return (
    <>
        <Header title={"Student List"}/>
        <Body list={list}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
        />
           <Footer len={list.length} />
           <Search handleSearch={handleSearch} />
    </>
  )
}

export default App