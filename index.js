require('dotenv').config()
const express = require('express')
const app = express()

// Added for part 3
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//

app.use("/places", require("./controllers/places"))

// Changed res.send to res.render and placed "home" from home.jsx
app.get("/", (req,res)=>{
    res.render("home")
})
//

// Changed res.status(404).send to res.render and placed "error404" from error404.jsx
app.get("*", (req,res)=>{
    res.render("error")
})

app.listen(process.env.PORT)
