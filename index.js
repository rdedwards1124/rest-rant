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

app.get("*", (req,res)=>{
    res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT)
