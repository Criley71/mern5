require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require("./models/Register")
const app = express()

app.use(cors(
    {
        origin: ["https://mern5-frontend.vercel.app", "https://mern5-frontend.vercel.app/login"],
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(express.json())

mongoose.connect(process.env.MONGODB)

app.get("/", (req, res) => {
    res.json("Hello");
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then(user => {
            if(user){
                if(user.password === password){
                    res.json("Success")
                    let userName = user.email
                    let userPassword = user.password
                }else {
                    res.json("Incorrect Password")
                }
            } else {
                res.json("No email associated with an account")
            }
        })
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("already have account")
            } else {
                RegisterModel.create({ name: name, email: email, password: password })
                    .then(result => res.json(result))
                    .catch(err => res.json(err))
            }
        })
        .catch(error => res.json(error))
})

app.post('/survey', (req, res) => {
    const email = req.body;
    RegisterModel.findOneAndUpdate( {email: email})
        .then(user => {
            user.meals.push(res.json)
        })
})

app.listen(8000, () => {
    console.log("server is running")
})
