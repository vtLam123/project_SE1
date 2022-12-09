const teacherController = require("../controllers/teacherController");

const express = require('express');
const teacherRouter = express.Router();

teacherRouter.get('/', teacherController.getAllTeachers)
teacherRouter.get('/:id', teacherController.getATeacher)
teacherRouter.get('/search/:key')

teacherRouter.post('/create', teacherController.createATeacher)
teacherRouter.patch('/:id', teacherController.updateATeacher)

teacherRouter.delete('/:id', teacherController.deleteATeacher)

module.exports = teacherRouter;


