const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    title: { type: String, default: '', required: true },
    startTime: { type: Date},
    endTime: { type: Date},
    category: { type: String, default: '' },
    note: { type: String, default: '', required: true},
})
  
module.exports = mongoose.model('Form', formSchema)