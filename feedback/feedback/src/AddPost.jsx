import React, { useContext } from 'react'

import DataContext from './context/DataContext'

import { useNavigate } from 'react-router-dom'



const AddPost = () => {

  const {title, setTitle, body, setBody, handleSubmit} = useContext(DataContext)

  const navigate = useNavigate()

  

  const handleFormSubmit = (e) => {

    handleSubmit(e)

    navigate('/')

  }

  return (

    <div>

      <form className="add-post-form" onSubmit={handleFormSubmit}>

        <input 

          type="text" 

          placeholder='Post title...' 

          value={title}

          onChange={(e) => setTitle(e.target.value)}

        />

        <textarea 

          placeholder='Write your post content...' 

          value={body}

          onChange={(e) => setBody(e.target.value)}

        />

        <button type='submit'>Add Post</button>

      </form>

    </div>

  )

}



export default AddPost