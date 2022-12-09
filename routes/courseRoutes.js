const express = require('express');
const courseController = require('../controllers/courseController');
const courseRouter = express.Router();


courseRouter.get('/', courseController.getAllCourses)
courseRouter.get('/:id', courseController.getAcourse)
courseRouter.get('/recommend')
courseRouter.get('/search/:key')

// CREACTE A BOOK 
courseRouter.post('/create', courseController.addABook)
courseRouter.patch('/update')

courseRouter.delete('/delete')

module.exports = courseRouter;


