
// Part Five: Make Your Places Index Page
/* I'm not sure what to change here to include the index page... */
/* UPDATE: i figured it out :) */

// Changed res.send to res.render 
// Added an array of objects for my favorite restuarants
const router = require('express').Router()
const places = require("../models/places.js")

// Part 5 of rest-rants
router.get("/new", (req,res)=>{
    res.render("places/new")
})
//

// The Index Route
router.get("/", (req,res)=>{
    res.render("places/index", {places})
})



// Where does this even go?...
router.get('/:id', (req,res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render("error404")
    } else if (!places[id]) {
        res.render("error404")
    } else {
        res.render("places/show", { place: places[id], id })
    }
  })



// Class 5: rest-rant part5, this was supposed to be added b4 part5 of the activity!! The POST /places route
router.post("/", (req,res)=>{
    let newPlace = { ...req.body }
    if (newPlace.pic === "") {
        // Default image if none is provided
        newPlace.pic = "https://www.citypng.com/public/uploads/preview/hd-illustration-cartoon-burger-restaurant-png-11653268639gydp7epzbe.png"
    }
    if (newPlace.city === "") {
        newPlace.city = "Anytown"
    }
    if (newPlace.state === "") {
        newPlace.state = "USA"
    }
    places.push(newPlace)
    res.redirect("/places")
})
// Homework: picture will not show... UPDATE 4/30/23: FIX IT!!


router.get('/:id/edit', (req,res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] }) // Do i need a ', id' here?
    }
  })
  

router.put('/:id', (req,res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = '../public/images/cartoon-rest-rant.png'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})
  
  


router.delete("/:id", (req,res)=>{
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render("error404")
    } else if (!places[id]) {
        res.render("error404")
    } else {
        places.splice(id, 1)
        res.redirect("/places")
    }
})
  

module.exports = router





















// This... 

    // let places = [{
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

/* ... used to be inside of this...

router.get("/", (req,res)=>{
    res.render("places/index", {places})
})

*/
