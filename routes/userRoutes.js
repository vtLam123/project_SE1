const express = require('express');
const userRouter = express.Router();


userRouter.post('/signup')
userRouter.post('/login')
userRouter.post('/update')

module.exports = userRouter;