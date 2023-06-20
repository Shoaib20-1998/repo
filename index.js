const express = require('express');
const { connection } = require('mongoose');
const { kanbanuser } = require('./Models/user.model');
const app = express()
require("dotenv").config();
app.use(express.json())

app.post('/', async (req, res) => {
    console.log(req.body)
    console.log(process.env.port)
    try {
        let newuser = new kanbanuser(req.body)
         newuser.save()
        res.send(newuser)
    } catch (error) {
        res.send(error)
    }
})


app.listen(process.env.port, async () => {

    try {
        await connection
        console.log("running")
    } catch (error) {
        console.log(error)
    }

})