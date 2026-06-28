const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`MongoDB connected`)
    })
    .catch(err => {
        console.log(`mongoose error : ${err}`)
    })
}

module.exports = connectDB