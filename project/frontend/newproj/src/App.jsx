import { useEffect,useState } from "react";
import './App.css';
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
    alert("Course Deleted Successfully");
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
    alert("Course Updated Successfully");
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)} />
      <button type="submit">Add Course</button>
      <button type="button" onClick={update}>Update Course</button>
      <button></button>
    </form>

  <ul>
  {
    courses.map(course =>
      <li key={course._id}>
        {course.title} - {course.duration}

        <button onClick={() => handleDelete(course._id)}>
          Delete
        </button>
        <button onClick={() => handleEdit(course)}>Click</button>
      </li>
    )
  }
</ul>

    </>
  )
}
export default App;