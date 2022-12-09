const { modelNames, connections } = require("mongoose");

const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name:{
        type: String
    },
    birtYear:{
        type: Number
    },
    courses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
})

const courseSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    publishedData:{
        type:String,
    },
    genner:{
        type: [String]
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    },
});
let Course = mongoose.model("Course", courseSchema);
let Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = {Course, Teacher};