
// Part Five: Make Your Places Index Page
/* I'm not sure what to change here to include the index page... */
/* UPDATE: i figured it out :) */

// Changed res.send to res.render 
// Added an array of objects for my favorite restuarants
const router = require('express').Router()
const places = require("../models/places.js")
// Part 8: added
const db = require('../models')


// Part 5 of rest-rants
router.get("/new", (req,res)=>{
    res.render("places/new")
})

// The Index Route
router.get("/", (req,res)=>{
    db.Place.find()
    .then((places)=>{
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// Where does this even go?...
// SHOW
router.get('/:id', (req,res)=>{
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        res.render('places/show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// Class 5: rest-rant part5, this was supposed to be added b4 part5 of the activity!! The POST /places route
router.post("/", (req,res)=>{
    db.Place.create(req.body)
    .then(()=>{
        res.redirect('/places')
    })
    .catch(err=>{
        console.log('err', err)
        res.render('error404')
    })
})
// Homework: picture will not show... UPDATE 4/30/23: FIXED IT!!

router.get('/:id/edit', (req,res)=>{
    let id = req.params.id
    db.Place.findById(id)
        .then((place)=>{
            res.render('place/edit', {place})
        })
        .catch((err)=>{
            res.render("error404")
        })
})
  
router.put("/:id", (req, res) => {
    let id = req.params.id
    //  Dig into req.body and make sure data is valid
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = "../public/images/cartoon-rest-rant.png";
    }
    if (!req.body.city) {
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        req.body.state = "USA";
    }
    db.Place.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedPlace) => {
            res.redirect(`/places/${id}`);
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});





router.delete("/:id", (req, res) => {
    let id = req.params.id;
    db.Place.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log(err);
            res.render("error404");
        });
});

// Part 8: This is new...
router.post('/:id/rant', (req,res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req,res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
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
