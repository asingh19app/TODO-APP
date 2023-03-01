const {Form} = require('../models/form');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const formList = await Form.find()

    if(!formList) {
        res.status(500).json({succss: flase})
    }
    res.send(formList);
})

router.post('/', async (req, res) => {
    let form = new Form({
        title: req.body.title,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        category: req.body.category,
        note: req.body.note,
    })

    form = await form.save();

    if(!form)
    return res.status(400).send('the form cannot be created!')
    res.send(form);
})

