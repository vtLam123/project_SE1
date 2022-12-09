const { Course, Teacher } = require("../models/model")

const courseController = {
    // CREATE A COURSE
    createABook: async (req, res) => {
        try {
            const newCourse = new Course(req.body)
            const saveCourse = await newCourse.save()
            if (req.body.teacher) {
                const teacher = await Teacher.findById(req.body.teacher)
                await teacher.updateOne({ $push: { courses: saveCourse._id } })
            }
            res.status(200).json(saveCourse)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // GET ALL COURSES 
    getAllCourses: async (req, res) => {
        try {
            const allCourses = await Course.find()
            res.status(200).json(allCourses)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // GET A COURSE
    getACourse: async (req, res) => {
        try {
            const course = await Course.findById(req.params.id).populate("teacher")
            res.status(200).json(course)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // UPDATE A COURSE
    updateACouse: async(req, res)=>{
        try{
            const course = await Course.findById(req.params.id)
            await course.updateOne({$set: req.body})
            res.status(200).json("Update course successfully!")

        } catch (err) {
            res.status(500).json(err)
        }
    },
    // DELETE A COURSE
    deleteACourse: async(req,res)=>{
        try{
            await Teacher.updateMany(
                {couses: req.params.id}, 
                {$pull: {courses: req.params.id}}
            )
            await Course.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted a course successfully!")
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = courseController