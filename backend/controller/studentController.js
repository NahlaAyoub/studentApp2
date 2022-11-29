const express = require('express');
var router = express.Router();
var { Student } = require('../models/student');
var rowId = require('mongoose').Types.ObjectId;
//get method to get all of students those stored in db
router.get('/', (req, res) => {

    Student.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in retriving Students', JSON.stringify(err, undefined, 2));
        }
    });
});

//post method that create anew student and store it in db
router.post('/', (req, res) => {
    var stu = new Student({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        studentTelephon: req.body.studentTelephon,
        parentTelephon: req.body.parentTelephon,
        birthDay: req.body.birthDay,
        email: req.body.email,
        city: req.body.city,
        country: req.body.country,
        priviousKnowledge: req.body.priviousKnowledge,
    })
    stu.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in saving Student: ' + JSON.stringify(err, undefined, 2))
        }
    })
})

router.put('/:id', (req, res) => {
    if (!rowId.isValid(req.params.id))
        return res.status(400).send('No recored with given id: ${req..params.id}');
    var student = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        studentTelephon: req.body.studentTelephon,
        parentTelephon: req.body.parentTelephon,
        birthDay: req.body.birthDay,
        email: req.body.email,
        city: req.body.city,
        country: req.body.country,
        priviousKnowledge: req.body.priviousKnowledge,
    };
    Student.findByIdAndUpdate(req.params.id, { $set: student }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Student Update: ' + JSON.stringify(err, undefined, 2));
        }
    })
})

router.delete('/:id', (req, res) => {
    if (!rowId.isValid(req.params.id))
        return res.status(400).send('No recored with given id:${req.params.id}');
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in Student Delete: " + JSON.stringify(err, undefined, 2));
        }
    })
})
module.exports = router;