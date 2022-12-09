const express = require('express');
const courseController = require('../controllers/courseController');
const courseRouter = express.Router();


courseRouter.get('/', courseController.getAllCourses)
courseRouter.get('/:id', courseController.getACourse)
courseRouter.get('/recommend')
courseRouter.get('/search/:key')

// CREACTE A BOOK 
courseRouter.post('/create', courseController.createABook)
courseRouter.patch('/:id', courseController.updateACouse)

courseRouter.delete('/:id', courseController.deleteACourse)

module.exports = courseRouter;


