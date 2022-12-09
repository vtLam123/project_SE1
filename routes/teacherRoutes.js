const teacherController = require("../controllers/teacherController");

const express = require('express');
const teacherRouter = express.Router();

teacherRouter.get('/')
teacherRouter.get('/:id')
teacherRouter.get('/search/:key')


teacherRouter.post('/create', teacherController.addTeacher)
teacherRouter.patch('/update')

teacherRouter.delete('/delete')

module.exports = teacherRouter;


