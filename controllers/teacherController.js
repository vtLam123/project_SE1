const {Teacher, Course} = require("../models/model")

const teacherController = {
    // CREATE A TEACHER 
    addATeacher: async(req,res)=>{
        try{
            const newTeacher = new Teacher(req.body)
            const saveTeacher = await newTeacher.save()
            res.status(200).json(saveTeacher)

        }catch(err) {
            res.status(500).json(err)
        }
    },
    // GET ALL TEACHERS 
    getAllTeachers: async(req,res)=>{
        try{
            const allTeachers = await Teacher.find()
            res.status(200).json(allTeachers)
        }catch(err) {
            res.status(500).json(err)
        }
    },
    // GET A TEACHER 
    getATeacher: async(req,res)=>{
        try{
            console.log(req.params.id);
            const teacher = await Teacher.findById(req.params.id).populate("courses")
            res.status(200).json(teacher)
        } catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = teacherController