import { useState} from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Add from './Add'
import Search from './Search'
import { One } from './One'
import { Two } from './Two'
import { DataProvider } from './DataContext'

function App() {

  

  const [list, setList] = useState([
    { id: 1, name: "sara", fee: true },
    { id: 2, name: "peru", fee: false },
    { id: 3, name: "msp", fee: true }
  ])
  const [name, setName] = useState("")
  const [search, setSearch] = useState("")

  // Delete a record
  const handleDelete = (id) => {
    setList(list.filter((ls) => ls.id !== id))
  }

  // Toggle fee
  const handleCheck = (id) => {
    const newList = list.map((ls) =>
      ls.id === id ? { ...ls, fee: !ls.fee } : ls
    )
    setList(newList)
  }

  // Add a new student
  const handleAdd = () => {
    if (!name.trim()) return

    const newItem = {
      id: list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 1,
      name: name,
      fee: false
    }

    setList([...list, newItem])
    setName("")
  }

  // Live search filtering
  const filtered = list.filter((ls) =>
    ls.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Header title={"Student List"} dep={"CSE"} />

      {/* Main List */}
      <Body
        list={filtered}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer len={list.length} />

      {/* Add new student */}
      <Add
        name={name}
        setName={setName}
        handleAdd={handleAdd}
      />

      {/* Live search */}
      <Search
        search={search}
        setSearch={setSearch}
      />

      {/* Context examples */}
      <DataProvider>
        <One />
        <Two />
      </DataProvider>
      
    </>
  )
}

export default App
