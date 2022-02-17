const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')
const validator = require('validator');


const Task = mongoose.model('Task', {
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

module.exports = Task