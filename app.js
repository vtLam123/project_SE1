const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const userRouter = require('./routes/userRoutes')

const app = express();

app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use('/api/v1/user', userRouter);

module.exports = app;