const express = require('express')
const { mongoose } = require('./db.js')
const cors = require('cors')

var studentController = require('./controller/studentController')

var app = express();
app.use(express.json());
app.use(cors());
app.listen(5450, () => console.log('Server started at port : 5450'));

app.use('/students', studentController);