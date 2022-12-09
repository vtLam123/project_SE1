const { Course, Teacher } = require("../models/model")

const courseController = {
    // CREATE A COURSE
    addABook: async (req, res) => {
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
    getAcourse: async (req, res) => {
        try {
            const course = await Course.findById(req.params.id).populate("teacher")
            res.status(200).json(course)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = courseController