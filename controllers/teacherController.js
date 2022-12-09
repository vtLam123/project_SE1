const {Teacher, Course} = require("../models/model");

const teacherController = {
    addTeacher: async(req,res)=>{
        res.status(200).json(req.body);
    },
};

module.exports = teacherController;