
const mongoose = require('mongoose')
const { Schema } = mongoose
const placeSchema = new Schema({
    name: {type: String, required: true},
    pic: {type: String, default: '../public/images/cartoon-rest-rant.png'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {type: Number},
})

const Place = mongoose.model("Place", placeSchema)

module.exports = Place








// module.exports = [{
//     name: 'Red Lobster',
//     city: 'Long Beach',
//     state: 'CA',
//     cuisines: 'Seafoods, Steaks, Pastas, Side Dishes',
//     pic: '/images/red-lobster-food.jpg',
// },{
//     name: 'Benihanas',
//     city: 'Torrance',
//     state: 'CA',
//     cuisines: 'Fried Rice, Steaks, Vegetables, Seafoods',
//     pic: '/images/Benihana-food.jpg',
// },]