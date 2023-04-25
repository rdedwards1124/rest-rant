const router = require('express').Router()

router.get("/", (req,res)=>{
    res.send("GET /places")
})

module.exports = router

// Part Five: Make Your Places Index Page
/* I'm not sure what to change here to include the index page... */