nodconst {Forms} = require('../models/form');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    const formList = await Forms.find()

    if(!formList) {
        res.status(500).json({success: false})
    }
    res.send(formList);
})
router.get("/", async (req, res) => {
    let collection = await db.collection("posts");
    let results = await collection.find({})
      .limit(50)
      .toArray();
  
    res.send(results).status(200);
  });


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