const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require("./models/Register")
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://criley16:141028Cr@merntodo.cpttvig.mongodb.net/test')

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then( user => {
        if(user) {
            res.json("already have account")
        } else {
            RegisterModel.create({name: name, email: email, password: password})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    })
    .catch(error => res.json(error))
})

app.listen(8000, () => {
    console.log("server is running")
})