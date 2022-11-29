
const mongoose = require('mongoose')
var Student = mongoose.model('Student',
    {
        firstName: { type: String },
        middleName: { type: String },
        lastName: { type: String },
        studentTelephon: { type: String },
        parentTelephon: { type: String },
        birthDay: { type: String },
        email: { type: String },
        city: { type: String },
        country: { type: String },
        priviousKnowledge: { type: Boolean },
    });
module.exports = { Student };