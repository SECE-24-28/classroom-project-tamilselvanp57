import { useEffect,useState } from "react";
import './App.css';
import './style.css'  
import { addCourse, getCourses,deleteCourse, updateCourse } from "./api/courseapi"; 

function App(){
  const [courses,setCourses]=useState([])
  const[title,setTitle]=useState('')
  const[duration,setDuration]=useState('')
    const[editId,setEditId]=useState('')

  const fetchCourses=async()=>{
    const res=await getCourses()
    setCourses(res.data)
  }
  useEffect(()=>{
    fetchCourses()
  },[])
  //function to handle form submission
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await addCourse({title,duration});
    fetchCourses();
    setTitle('');
    setDuration('');
  }
  // function to handle delete course
  const handleDelete=async(id)=>{
    await deleteCourse(id);
    fetchCourses();
    alert("Movie Deleted Successfully");
  }
  // function to handle edit course
  const handleEdit=async(course)=>{
    setTitle(course.title);
    setDuration(course.duration);
    setEditId(course._id);
  }

  const update=async()=>{

    await updateCourse(editId,{title,duration})
    fetchCourses();
    alert("Movie Updated Successfully");
  }
  return(
    <>
    <h1>Movie Management App</h1>
    <form className="frm" onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)} />
      <br/>
      <button className="btn" type="submit">Add Movie</button>
      <button type="button" className="btn" onClick={update}>Update Movie</button>
      
    </form>

  <table className="list">
  {
    courses.map(course =>
      
        <tr key={course._id} >
          <td>{course.title} - {course.duration}</td>
          <td>
           <button className="btn"onClick={() => handleDelete(course._id)}>
           Delete
          </button>
          </td>
         <td> 
        <button className="btn" onClick={() => handleEdit(course)}>Click</button>
        </td>
         </tr>
    )
  }
  </table>


    </>
  )
}
export default App;