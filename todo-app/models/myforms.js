import mongoose from 'mongoose'

const mongoose = require('mongoose')

const myformsschema = new mongoose.Schema({
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
  
exports.myforms = mongoose.model('myforms', myformsschema)
