const express = require('express');
const { connection } = require('mongoose');
const { Kanbanuser } = require('./Models/user.model');
const app = express()
require("dotenv").config();
app.use(express.json())

app.post('/', async(req, res)=> {
    console.log(req.body)
    console.log(process.env.url)
    try {
        let newuser = new Kanbanuser(req.body)
         newuser.save()
        res.send(newuser)
    } catch (error) {
        res.send(error)
    }
}) 

app.get('/', async(req, res)=> {
    res.send("hy")
})


app.listen(process.env.port, async() => {

    try {
        await connection
        console.log("running")
    } catch (error) {
        console.log(error)
    }

})