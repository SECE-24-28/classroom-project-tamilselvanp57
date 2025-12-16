import axios from 'axios'
const  api=axios.create ({
    baseURL:'http://localhost:4000/api'
}   )
export const getCourses=()=>api.get('/courses')
export const addCourse=(course)=>api.post('/courses',course)
export const deleteCourse=(id)=>api.delete(`/courses/${id}`)
export const updateCourse=(id,course)=>api.put('/courses/'+id,course)