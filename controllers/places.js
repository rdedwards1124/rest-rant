
// Part Five: Make Your Places Index Page
/* I'm not sure what to change here to include the index page... */
/* UPDATE: i figured it out :) */

// Changed res.send to res.render 
// Added an array of objects for my favorite restuarants
const router = require('express').Router()

router.get("/", (req,res)=>{
    let places = [{
        id: 0,
        name: 'Red Lobster',
        city: 'Long Beach',
        state: 'CA',
        cuisines: 'Seafoods, Steaks, Pastas, Side Dishes',
        pic: '/images/red-lobster-food.jpg',
    },{
        id: 1,
        name: 'Benihanas',
        city: 'Torrance',
        state: 'CA',
        cuisines: 'Fried Rice, Steaks, Vegetables, Seafoods',
        pic: '/images/Benihana-food.jpg',
    },]
    res.render("places/index", {places})
})

module.exports = router