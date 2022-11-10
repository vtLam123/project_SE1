const express = require('express');
const teacherRouter = express.Router();


teacherRouter.get('/')
teacherRouter.get('/:id')

teacherRouter.post('/create')
teacherRouter.patch('/update')

teacherRouter.delete('/delete')

module.exports = teacherRouter;