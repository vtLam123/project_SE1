const express = require('express');
const reviewRouter = express.Router();


reviewRouter.get('/')
reviewRouter.get('/:id')

reviewRouter.post('/create')
reviewRouter.patch('/update')

reviewRouter.delete('/delete')

module.exports = reviewRouter;

