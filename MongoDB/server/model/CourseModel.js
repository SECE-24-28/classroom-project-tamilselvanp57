// const mongoose = require("mongoose")
// const CourseSchema = new mongoose.Schema({
//     title:{type: String,required:true},
//     duration:{type: String, required: true}});
// exports.model = mongoose.mongoose.model("Course", CourseSchema);
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true }
});

module.exports = mongoose.model("Course", courseSchema);