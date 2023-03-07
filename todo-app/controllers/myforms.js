// const {Forms} = require('../models/form');
// const express = require('express');
// const router = express.Router();

// router.get('/', async (req,res) => {
//     const formList = await Forms.find()

//     if(!formList) {
//         res.status(500).json({success: false})
//     }
//     res.send(formList);
// })

// router.post('/', async (req, res) => {
//     let form = new Forms({
//         title: req.body.title,
//         startTime: req.body.startTime,
//         endTime: req.body.endTime,
//         category: req.body.category,
//         note: req.body.note,
//     })

//     form = await form.save();

//     if(!form)
//     return res.status(400).send('the form cannot be created!')
//     res.send(form);
// })

// module.exports = router;

const {Forms} = require('../models/myforms');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const formList = await Forms.find()
    console.log('This is GET')
    if(!formList) {
        res.status(500).json({success: false})
    }
    res.send('Success');
})

router.post('/', async (req, res) => {
    console.log('This is POST')
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