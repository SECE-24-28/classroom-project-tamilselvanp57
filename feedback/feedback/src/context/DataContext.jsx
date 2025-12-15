import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";
import api from '../api/Post'

const DataContext=createContext()
export const DataProvider=({children})=>
{
      const [posts,setPosts] = useState([])
  const [search,setSearch]=useState("")
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [loading,setLoading]=useState(true)

  //Fetch Iniyial Infor
  //it Will Load Only Once
  useEffect(()=>
  {
    const fetData=async()=>
    {
      try {
        const res=await api.get("/feedback")
        setPosts(res.data)
      } catch (error) {
        console.log('Server not running, using empty posts')
        setPosts([])
      }
      setLoading(false)
    }
    fetData();
  },[]
  )

  //search
  useEffect(()=>
  {
    const filterd=posts.filter((post)=>(post.title).includes(search)
                              )
    setSearchResult(filterd)
  },[posts,search])

  const handleSubmit=(e)=>
  {
    e.preventDefault()
    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime=format(new Date(),"MMM dd,yyyy pp")
    //newObj={id:id,title:title,datetime:datetime,body:body}
     const newObj={id,title,datetime,body}
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
  }
    return (
        <DataContext.Provider value={{posts,searchResult,title,setTitle,body,setBody,
                                  search,setSearch,handleSubmit,loading
                                     }}>
          {children}
        </DataContext.Provider>
    )
}
export default DataContext