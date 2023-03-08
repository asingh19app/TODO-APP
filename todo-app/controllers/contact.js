const {Contacts} = require('../models/contact');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const contactList = await Contacts.find()

    if(!contactList) {
        res.status(500).json({success: false})
    }
    res.send(contactList);
})

router.post('/', async (req, res) => {
    let contact = new Contacts({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        note: req.body.note,
    })

    contact = await contact.save();

    if(!contact)
    return res.status(400).send('the contact page cannot be reached cannot be created!')
    res.send(contact);
})

module.exports = router;