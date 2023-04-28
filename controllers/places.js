
// Part Five: Make Your Places Index Page
/* I'm not sure what to change here to include the index page... */
/* UPDATE: i figured it out :) */

// Changed res.send to res.render 
// Added an array of objects for my favorite restuarants
const router = require('express').Router()

// Part 5 of rest-rants
router.get("/new", (req,res)=>{
    res.render("places/new")
})
//

router.get("/", (req,res)=>{
    let places = [{
        name: 'Red Lobster',
        city: 'Long Beach',
        state: 'CA',
        cuisines: 'Seafoods, Steaks, Pastas, Side Dishes',
        pic: '/images/red-lobster-food.jpg',
    },{
        name: 'Benihanas',
        city: 'Torrance',
        state: 'CA',
        cuisines: 'Fried Rice, Steaks, Vegetables, Seafoods',
        pic: '/images/Benihana-food.jpg',
    },]
    res.render("places/index", {places})
})

// Class 5: rest-rant part5, this was supposed to be added b4 part5 of the activity!!
router.post("/", (req,res)=>{
    res.send("POST /places stub")
})

  
module.exports = router