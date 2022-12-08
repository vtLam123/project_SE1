const mongoose = require('mongoose');
const app = require("./app");
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});

dotenv.config({ path: './config.env' });
mongoose
.connect(process.env.DATABASE)
.then(() => {
    console.log('Connected to DB successfully');
}).catch(e => {
    console.log(e);
});
