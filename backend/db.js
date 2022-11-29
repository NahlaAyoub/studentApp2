const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nahla:NA123@cluster0.q9wpbww.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log("I am connected to MongoDB")
    } else {
        console.log("I am not connected to MongoDB", err)
    }
});
module.exports = mongoose