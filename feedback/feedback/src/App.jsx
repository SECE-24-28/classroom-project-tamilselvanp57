import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { format } from 'date-fns'
import DataContext, { DataProvider } from './context/DataContext'
import { Link ,Route,Routes} from 'react-router-dom'
function AppContent() {
  const {loading} = useContext(DataContext)
  
  if (loading) {
    return (
      <div className="app-container">
        <div style={{padding: '40px', textAlign: 'center', color: '#666'}}>
          Loading posts...
        </div>
      </div>
    )
  }
  
  return (
    <>
    <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/newpost">NewPost</Link></li>
    </ol>
    <div className="app-container">
      <div className="search-section">
        <Search />
      </div>
      <div className="add-post-section">
        <AddPost />
      </div>
      <div className="posts-section">
        <Home />
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newpost" element={<AddPost/>}/>
    </Routes>
    </>
  )
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  )
}

export default App