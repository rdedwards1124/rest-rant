require('dotenv').config()
const express = require('express')
const app = express()

// method override
const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//
// Class 4: rest-rants part 4
app.use(express.static("public"))

// part 5: new app.use
app.use(express.urlencoded({ extended: true }))
// Update 4/30/23: That(line above) needs to go b4 this(line 27)

// part 6: method override?
app.use(methodOverride('_method'))

app.use("/places", require("./controllers/places"))


// Changed res.send to res.render and placed "home" from home.jsx
app.get("/", (req,res)=>{
    res.render("home")
})
//

// Changed res.status(404).send to res.render and placed "error404" from error404.jsx
app.get("*", (req,res)=>{
    res.render("error404")
})
//

app.listen(process.env.PORT)
