import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
  const {searchResult} = useContext(DataContext)
  
  if (searchResult.length === 0) {
    return (
      <div className="empty-state">
        <p>No posts found. Create your first post above!</p>
      </div>
    )
  }
  
  return (
    <div>
      {searchResult.map((post) => (
        <div key={post.id} className="post-card">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-date">{post.datetime}</p>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Home