
const mongoose = require('mongoose')
const { Schema } = mongoose
const placeSchema = new Schema({
    name: {type: String, required: true},
    pic: {type: String, default: '../public/images/cartoon-rest-rant.png'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, "Surely not that old?!"],
        max: [new Date().getFullYear(), "Hey, this year is in the future!"]
    },
})

placeSchema.methods.showEstablished = function (){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

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