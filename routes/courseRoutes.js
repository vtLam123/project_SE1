const express = require('express');
const courseRouter = express.Router();


courseRouter.get('/')
courseRouter.get('/:id')
courseRouter.get('/recommend')
courseRouter.get('/search')

courseRouter.post('/create')
courseRouter.patch('/update')

courseRouter.delete('/delete')

module.exports = courseRouter;


