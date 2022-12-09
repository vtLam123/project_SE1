const {Teacher, Course} = require("../models/model")

const teacherController = {
    // CREATE A TEACHER 
    createATeacher: async(req,res)=>{
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
    },
    updateATeacher: async(req, res)=>{
        try{
            const teacher = await Teacher.findById(req.params.id)
            await teacher.updateOne({$set: req.body})
            res.status(200).json("Update teacher successfully!")

        } catch (err) {
            res.status(500).json(err)
        }
    },
    // DELETE A TEACHER
    deleteATeacher: async(req,res)=>{
        try{
            await Course.updateMany(
                {teacher: req.params.id}, 
                {teacher: null}
            )
            await Teacher.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted a teacher successfully!")
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = teacherController