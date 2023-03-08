const {Forms} = require('../models/form');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const formList = await Forms.find()

    if(!formList) {
        res.status(500).json({success: false})
    }
    res.send(formList);
})

router.post('/', async (req, res) => {
    let form = new Forms({
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        description: req.body.description,
        allDay: req.body.allDay,
        free: req.body.free,
        color: req.body.color,
    })

    form = await form.save();

    if(!form)
    return res.status(400).send('the form cannot be created!')
    res.send(form);
})
//delete
router.delete('/:id', (req, res) => {
    Forms.findOneAndRemove(req.params.id).then(form => {
        if(form) {
            return res.status(200).json({success: true, message: 'the form is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "form not found!"})
        }
    }).catch(err=>{
        return res.status(500).json({success: false, error: err}) 
     })
})

module.exports = router;
