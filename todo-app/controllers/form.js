<<<<<<< HEAD
const {Forms} = require('../models/myforms');
=======
nodconst {Forms} = require('../models/form');
>>>>>>> stephen_dev
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const formList = await Forms.find()

    if(!formList) {
        res.status(500).json({succss: flase})
    }
    res.send(formList);
})

router.post('/', async (req, res) => {
    let form = new Forms({
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

module.exports = router;