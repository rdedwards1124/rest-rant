require('dotenv').config()
const mongoose = require('mongoose')

// This gets rid of the warning message...
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')