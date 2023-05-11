// Start of Part 9
const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '../public/images/thai.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '../public/images/cat-cafe.jpg',
    founded: 2020
}])
.then(()=>{
    process.exit()
})
.catch(err=>{
    process.exit()
})