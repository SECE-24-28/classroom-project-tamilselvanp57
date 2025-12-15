// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const app = express()
// const PORT = 4000
// app.use(cors())
// app.use(express.json())
// mongoose.connect("mongodb://localhost:27017/mycourse").then(()=>
// {
//     console.log("DB Connection Success.....")
// }).catch((err)=>console.log(err))

// const mycourse = require("./model/CourseModel")

// app.get("/api/courses",async(req,res)=>
// {
//     try{
//     const courses = await mycourse.find()
//     res.json(courses)
//     }
//     catch(error){
//         res.status(500).json({message:error.message})
//     }
// })
// app.post("./api/course",async(req,res) => 
// {
//     try{
//         const {title,duration} = req.body
//         const course = new mycourse({title,duration})
//         await course.save()
//         res.status(201).json(course)
//     }catch(error){
//         console.log("error ocurred!!")
//     }
// })
// app.get("/api/course/:id",async(req,res)=>
// {
//     try{
//     const courses = await mycourse.findById(req.params.id)
//     if(!courses){
//         return res.status(404).json({message : "Course Not Found"})
//     }
//     res.json(course)
//     }
//     catch(error){
//         res.status(500).json({message:error.message})
//     }
// })
// express.put("/api/course",(req,res) =>{
//     try{
//         const {title,duration} = req.body
//         mycourse.findByIdAndUpdate
//     }
// }
// )

// app.listen(PORT,()=>{
//     console.log(`server is running on PORT ${PORT}`)
// })
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mycourse")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Import the model (assuming CourseModel exports the model correctly)
const Course = require("./model/CourseModel");

// GET all courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();   // Fetch all courses from the DB
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

// POST create a new course
app.post("/api/courses", async (req, res) => {
  try {
    const newCourse = new Course(req.body); // Create new document from req.body
    await newCourse.save();                 // Save to MongoDB
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "Error creating course" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});