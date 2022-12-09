const teacherController = require("../controllers/teacherController");

const express = require('express');
const teacherRouter = express.Router();

teacherRouter.get('/', teacherController.getAllTeachers)
teacherRouter.get('/:id', teacherController.getATeacher)
teacherRouter.get('/search/:key')

// create a teacher 
teacherRouter.post('/create', teacherController.addATeacher)

teacherRouter.patch('/update')

teacherRouter.delete('/delete')

module.exports = teacherRouter;


