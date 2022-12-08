const { modelNames, connections } = require("mongoose");

const mongoose = request("mongooe")

connections

const courseSchema= new mongoose.Schova({
    name: {
        type:String,
        required:true
    },
    publishedData:{
        type:String,
    },
    genner:{
        type: [String]
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    },
});
let Course = mongoose.model("Course", bookSchoma);

module.exports = {Course};