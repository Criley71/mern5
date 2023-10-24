const mongoose = require('mongoose')
const mealSchema = new mongoose.Schema({
    mealName: String,
    mealTime: Number,
    insulinTime: Number,
    dosage: Number,
    carbCount: Number
})
const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    meals: [mealSchema]

})



const RegisterModel = mongoose.model('register', RegisterSchema) //collection name, schema (structure)

module.exports = RegisterModel