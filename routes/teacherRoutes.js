const express = require('express');
const teacherRouter = express.Router();


teacherRouter.get('/')
teacherRouter.get('/:id')
teacherRouter.get('/search/:key')


teacherRouter.post('/create')
teacherRouter.patch('/update')

teacherRouter.delete('/delete')

module.exports = teacherRouter;


