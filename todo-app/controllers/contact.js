const {Contacts} = require('../models/contactUs');
const express = require('express');
const router = express.Router();

router.get('/contact', async (req,res) => {
    const contactList = await Contacts.find()

    if(!contactList) {
        res.status(500).json({success: false})
    }
    res.send(contactList);
})

router.post('/', async (req, res) => {
    let contact = new Contacts({
        title: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.number,
        note: req.body.note,
    })

    contact = await contact.save();

    if(!contact)
    return res.status(400).send('the contact page cannot be reached cannot be created!')
    res.send(contact);
})

module.exports = router;