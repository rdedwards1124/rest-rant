
// Part Five: Make Your Places Index Page
/* I'm not sure what to change here to include the index page... */
/* UPDATE: i figured it out :) */

// Changed res.send to res.render 
// Added an array of objects for my favorite restuarants
const router = require('express').Router()

router.get("/", (req,res)=>{
    let places = [{
        name: 'Red Lobster',
        city: 'Long Beach',
        state: 'CA',
        cuisines: 'Seafoods, Steaks, Pastas, Side Dishes',
        pic: 'https://www.fastfoodpost.com/wp-content/uploads/2022/02/Red-Lobster-Introduces-New-Date-Night-Feast-For-Two-And-Lobster-Topped-Stuffed-Flounder-As-Part-Of-Returning-Lobsterfest-Promotion.jpg',
    },{
        name: 'Benihanas',
        city: 'Torrance',
        state: 'CA',
        cuisines: 'Fried Rice, Steaks, Vegetables, Seafoods',
        pic: 'https://www.godairyfree.org/wp-content/uploads/2013/12/Benihana-feature.jpg',
    },]
    res.render("places/index", {places})
})

module.exports = router