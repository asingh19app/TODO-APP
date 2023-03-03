const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: { 
        type: String, 
        default: '', 
        required: true, 
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        default: '',
        required: true},
})
  
exports.Contacts = mongoose.model('Contact', contactSchema)