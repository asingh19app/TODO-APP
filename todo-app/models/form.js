const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const myformsschema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true
    },
    title: { 
        type: String, 
        default: '', 
        required: true, 
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    category: {
        type: String,
        default: '',
    },
    note: {
        type: String,
        default: '',
        required: true},
})

myformsschema.plugin(uniqueValidator);
  
exports.Form = mongoose.model('myforms2', myformsschema)
