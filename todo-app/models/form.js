// import mongoose from 'mongoose'

const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    title: { 
        type: String, 
        default: '', 
        required: true, 
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    allDay: {
        type: Boolean,
        default: false,
    },
    free: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: '#ff9900',
    }
})
  
exports.Forms = mongoose.model('Form', formSchema)
